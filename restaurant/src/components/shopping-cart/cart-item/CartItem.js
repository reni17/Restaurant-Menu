import styles from './CartItem.module.css'
export const CartItem = (props) => {

  const deleteItemHandler = () => {
    
  }
    return(
        <li className={styles.clearfix}>
        <img className={styles.imgStyle} src={props.cartItem.imageUrl} alt="item1" />
        <span className={styles["item-name"]}>{props.cartItem.name}</span>
        <span className={styles["item-price"]}>{Number(props.cartItem.price).toFixed(2) + " $"}</span>

        {/* <span className={styles["item-quantity"]}>Quantity: {props.quantity}</span> */}
        <div>
        <button onClick={deleteItemHandler} className={styles.button}>Delete</button>
        </div>
      </li>
    )
} 