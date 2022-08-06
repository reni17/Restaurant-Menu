import { useContext } from "react"

const { Navigate, Outlet } = require("react-router-dom")
const { AuthContext } = require("../contexts/AuthContext")

export const GuestGuard = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
       return <Navigate to = '/login' replace/>
    }

    return (
        <>
        {children}
        </>
        )}