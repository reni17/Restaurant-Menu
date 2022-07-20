import styles from "./ShoppingCart.module.css"
import * as userService from '../../services/userService'
import { useEffect, useState } from "react"
import { CartItem } from "./cart-item/CartItem"
import uniqid from 'uniqid';
export const ShoppingCart = () => {
const [cart, setCart] = useState([])

useEffect(()=> {
  userService.getUser("62d15cc093ccb13394d6dc09")
  .then(res => setCart(() => res.user.orders))
  
},[])

const removeItem = (userid) => {

}

let priceCounter = 0
const totalPrice = (orders)=> {
  orders.forEach(el => {priceCounter += el.price})
  return priceCounter
}
console.log(cart);
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
     {cart.map(order => <CartItem key = {uniqid()} cartItem = {order} quantity = {cart.length}/>)}
    </ul>

    <a href="#" className={styles.button}>Checkout</a>
  </div>
</div> 




    )
}