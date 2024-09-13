import React from 'react';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

import { User } from '../types/api/user';

type LoginUser = User & { isAdmin: boolean }

type LoginUserContextType = {
  loginUser: LoginUser | undefined
  setLoginUser: Dispatch<SetStateAction<LoginUser | undefined>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode}) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | undefined>(undefined);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
