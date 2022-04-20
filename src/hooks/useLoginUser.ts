import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider";

//contextを参照するためにuseContext()を実行するカスタムフック
export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext)