import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { AdminContext } from "../../../contexts/AdminContext";
 import * as authService from '../../../services/authService'
import * as foodService from '../../../services/foodService'
import styles from "./Details.module.css";





export const Details = (props) => {
  const {user} = useContext(AuthContext)
  const {admin} = useContext(AdminContext)
  let {foodId} = useParams()
  const navigate = useNavigate()
    const [food, setFood] = useState({})
    
    useEffect(()=> {
      foodService.getOne(foodId).then(res => setFood(res.food))
     
    }, [foodId])


    const orderHandler = () => {
    authService.populateUser(user._id, food._id)
    }


    const deleteHandler = () => {
      const deleted = foodService.deleteFood(food._id)
      .then(res => res.json(deleted))
      .then(data => {
        let newFoods = food.filter(item=> item._id !== data._id)
        setFood(newFoods)
      })
      .catch(error => console.log(error))
    
      navigate('/menus')
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
        {admin &&  
        <button onClick = {deleteHandler} className={styles["recipe-save"]} type="button">
           DELETE
        </button>}
      </div>
    </article>
  </div>
 
</>
  )
};
