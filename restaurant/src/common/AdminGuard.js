import { useContext } from "react"

const { Navigate } = require("react-router-dom")
const { AdminContext } = require("../contexts/AdminContext")

export const AdminGuard = ({children}) => {
    const {admin} = useContext(AdminContext)

    if(!admin){
       return <Navigate to = '/' replace/>
    }

    return (
        <>
        {children}
        </>
        )}