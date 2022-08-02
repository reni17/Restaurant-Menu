import { useContext } from 'react';
import styles from './CartItem.module.css'
export const CartItem = (props) => {

  
  // const {orderHandler} = useContext(ordersContext); 
    return(
        <li className={styles.clearfix}>
        <img className={styles.imgStyle} src={props.cartItem.imageUrl} alt="item1" />
        <span className={styles["item-name"]}>{props.cartItem.name}</span>
        <span className={styles["item-price"]}>{Number(props.cartItem.price).toFixed(2) + " $"}</span>

        {/* <span className={styles["item-quantity"]}>Quantity: {props.cartItem.quantity}</span> */}
        <div>
        <button onClick={() => props.removeItem(props.cartItem)} className={styles.button}>Delete</button>
        </div>
      </li>
    )
} 