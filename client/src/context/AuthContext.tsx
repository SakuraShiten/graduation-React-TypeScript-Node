import { createContext, useContext } from "react"
export type AuthContext = {
    isAuth: boolean,
    setIsAuth: (item: boolean) => void
}
export const MyAuthContext = createContext<AuthContext>({
    isAuth: false,
    setIsAuth: () => { }
})
export const useAuthContext = () => useContext(MyAuthContext)