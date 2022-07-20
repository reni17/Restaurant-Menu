import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userService from '../../../services/userService'
import * as foodService from '../../../services/foodService'
import styles from "./Details.module.css";
export const Details = (props) => {
    const {id} = useParams()
   

    const [food, setFood] = useState({})
  
    useEffect(()=> {
      foodService.getOne(id).then(res => setFood(res.food))
  }, [id])

  const orderHandler = () => {
userService.populateUser('62d15cc093ccb13394d6dc09', food._id)

  }
  return (

<>
  <div className={styles.big}>
    <article className={styles.recipe}>
      <div className={styles["pizza-box"]}>
        <img
          src={food.imageUrl}
          width={1500}
          height={1368}
          alt=""
        />
      </div>
      <div className={styles["recipe-content"]}>
        <p className={styles["recipe-tags"]}>
        <span className={`${styles["recipe-tag"]} ${styles["recipe-price"]}`}>{Number(food.price).toFixed(2)} $</span>
          <span className={styles["recipe-tag"]}>{food.type}</span>
        </p>
        <h1 className={styles["recipe-title"]}>
          <a href="#">{food.name}</a>
        </h1>
 
        <p className={styles["recipe-desc"]}>
         {food.description}
        </p>
            <button onClick = {orderHandler} className={styles["recipe-save"]} type="button">
          ORDER
        </button>
      </div>
    </article>
  </div>
 
</>
  )
};
