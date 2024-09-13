import React, { createContext, useState } from "react";

type UserContextType = {
  userInfo: any;
  setUserInfo: React.Dispatch<React.SetStateAction<any>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const UserProvider = (props: Props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
