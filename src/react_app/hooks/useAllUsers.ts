import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        response.json().then((users: User[]) => {
          setUsers(users);
        });
      })
      .catch(() => {
        showMessage({ title: 'ユーザーの取得に失敗しました', status: 'error' });
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
}
