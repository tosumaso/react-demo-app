import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: {children: ReactNode}) => {
  const {children} = props;
  const [loginUser,setLoginUser] = useState<User | null>(null);
  return (
    /* Contextに登録した値が変化するとContextを参照しているコンポーネントもレンダリングされる。レンダリングを減らすなら値毎にContextを用意することも可能*/
    <LoginUserContext.Provider value={{loginUser,setLoginUser}} >
      {children}
    </LoginUserContext.Provider>
  )
}