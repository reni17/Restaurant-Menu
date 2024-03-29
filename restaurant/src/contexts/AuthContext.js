import { Component, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useLocalStorage('auth', {})

    const userLogin = (authData) => {
        setAuth(authData)
    }

    const userLogout = () => {
        setAuth({})
    }

    return(
        <AuthContext.Provider value = {{user: auth, userLogin, userLogout, isAuthenticated: !!auth.accessToken }}>
            {children}
        </AuthContext.Provider>
    )
}


export const withAuth = (Component) => {
    const Wrapper = (props) => {
        const context  = useContext(AuthContext)

        return <Component {...props} auth = {context}/>
    }

    return Wrapper
}