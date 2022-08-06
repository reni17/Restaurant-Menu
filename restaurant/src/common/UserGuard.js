import { useContext } from "react"

const { Navigate } = require("react-router-dom")
const { AuthContext } = require("../contexts/AuthContext")

export const UserGuard = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext)

    if(isAuthenticated){
       return <Navigate to = '/' replace/>
    }

    return (
        <>
        {children}
        </>
        )}