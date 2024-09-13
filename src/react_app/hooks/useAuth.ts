import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";
import { User } from "../types/api/user";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      if(!response.ok) {
        showMessage({ title: 'ユーザーが見つかりません。', status: 'error' });
        setLoading(false);
      } else {
        response.json().then((response: User) => {
          const isAdmin = response.id === 10 ? true : false;
          setLoginUser({ ...response, isAdmin });
          showMessage({ title: 'ログイン成功しました。', status: 'success' });
          navigate('/');
        });
      }
    }).catch(() => {
      showMessage({ title: 'ログインに失敗しました。', status: 'error' })
      setLoading(false);
    })
  }, [navigate, showMessage, setLoginUser])
  
  return { login, loading }
}
