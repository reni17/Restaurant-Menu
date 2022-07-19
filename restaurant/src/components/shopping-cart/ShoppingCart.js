import styles from "./ShoppingCart.module.css"
export const ShoppingCart = () => {
    return(

<div className={styles.container}>
  <div className={styles["shopping-cart"]}>
    <div className={styles["shopping-cart-header"]}>
    <i className={`${styles.fa} ${styles["fa-shopping-cart"]} ${styles["cart-icon"]}`}></i><span className={styles.badge}>3</span>
      <div className={styles["shopping-cart-total"]}>
        <span className={styles["lighter-text"]}>Total:</span>
        <span className={styles["main-color-text"]}>$2,229.97</span>
      </div>
    </div> 

    <ul className={styles["shopping-cart-items"]}>
      <li className={styles.clearfix}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className={styles["item-name"]}>Sony DSC-RX100M III</span>
        <span className={styles["item-price"]}>$849.99</span>
        <span className={styles["item-quantity"]}>Quantity: 01</span>
      </li>
      <li className={styles.clearfix}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className={styles["item-name"]}>Sony DSC-RX100M III</span>
        <span className={styles["item-price"]}>$849.99</span>
        <span className={styles["item-quantity"]}>Quantity: 01</span>
      </li>
      <li className={styles.clearfix}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className={styles["item-name"]}>Sony DSC-RX100M III</span>
        <span className={styles["item-price"]}>$849.99</span>
        <span className={styles["item-quantity"]}>Quantity: 01</span>
      </li>

    </ul>

    <a href="#" className={styles.button}>Checkout</a>
  </div>
</div> 




    )
}