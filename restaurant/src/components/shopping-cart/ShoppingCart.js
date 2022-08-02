import styles from "./ShoppingCart.module.css"
import * as authService from '../../services/authService'
import { useEffect, useState, useContext} from "react"
import { CartItem } from "./cart-item/CartItem"
import uniqid from 'uniqid';
import { AuthContext } from "../../contexts/AuthContext";

export const ShoppingCart = () => {

const [cart, setCart] = useState([])
const {user} = useContext(AuthContext)


const currentUser = authService.getUser(user._id)


useEffect(()=> {
  currentUser
  .then(res => setCart([...res.user.orders]))
  
},[currentUser])

const removeItem = (itemToRemove) => {

    authService.updateUser(user._id, itemToRemove._id)
 
   setCart(cart.filter(item => item !== itemToRemove))
   

}

let priceCounter = 0
const totalPrice = (orders)=> {
  orders.forEach(el => {priceCounter += el.price})
  return priceCounter
}

    return(

<div className={styles.container}>
  <div className={styles["shopping-cart"]}>
    <div className={styles["shopping-cart-header"]}>
    <i className={`${styles.fa} ${styles["fa-shopping-cart"]} ${styles["cart-icon"]}`}></i><span className={styles.badge}>{cart.length}</span>
      <div className={styles["shopping-cart-total"]}>
        <span className={styles["lighter-text"]}>Total: </span>
        <span className={styles["main-color-text"]}>{totalPrice(cart).toFixed(2) + " $"}</span>
      </div>
    </div>  

    <ul className={styles["shopping-cart-items"]}>
     {cart.map(order => <CartItem removeItem = {removeItem} key = {uniqid()} cartItem = {order} />)}
    </ul>

   
  </div>
</div> 

    )
}