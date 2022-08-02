import { useEffect , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from '../../services/authService'

export const Logout = () => {
const navigate = useNavigate()
const {userLogout} = useContext(AuthContext) 
useEffect(() => {

    authService.logout()
    .then(() => {
        userLogout()
        navigate('/')
    })
    .catch(() => navigate('/'))
})
return null
}