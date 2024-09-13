import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      if(!response.ok) {
        showMessage({ title: 'ユーザーが見つかりません。', status: 'error' });
      } else {
        showMessage({ title: 'ログイン成功しました。', status: 'success' });
        navigate('/');
      }
    }).catch(() => showMessage({ title: 'ログインに失敗しました。', status: 'error' }))
    .finally(() => setLoading(false))
    }, []
  )
  
  return { login, loading }
}
