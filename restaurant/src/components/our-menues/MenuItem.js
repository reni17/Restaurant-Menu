
import {  Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
export const MenuItem = (props) => {
const {user} = useContext(AuthContext)
 
  
    return(
      <>

        <div className= {props.css["card"]}>

        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <div>{props.item.name}</div>
        {user.email && <div className={props.css["cta-container"]}><Link to = {`/details/${props.item._id}`} className={props.css["det-link"]}>Details</Link></div>}
        
        <div className={props.css["card_circle"]}><img src={props.item.imageUrl} alt = ""/></div>
       
    </div>

    </>  
    )
}