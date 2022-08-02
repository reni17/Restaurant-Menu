import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import { MenuItem } from "../MenuItem"
import styles from './catalog.module.css'
import { getAll } from "../../../services/foodService"

export const MenuCatalog = () => {

    const {typeMenu} = useParams()
    const [menu, SetMenu] = useState([])

    useEffect(()=> {   
        getAll().then(result => SetMenu(result.food))
    }, [])
    const hasFood = menu.filter(item => item.type == typeMenu)

    return (
        <>     
        <section id={styles["all-listings"]}>
        <h1>TODAY MENU</h1>
       {hasFood.length>0 
       ? menu.filter(foodItem => foodItem.type == typeMenu).map(foodItem => <MenuItem css = {styles} key = {foodItem._id} item = {foodItem} />)
       : <div className={styles["no-data-listing"]}>
        <p className={styles["no-offer"]}>There are no food...</p>
        </div>}
    
    </section>
    </>
    )
}