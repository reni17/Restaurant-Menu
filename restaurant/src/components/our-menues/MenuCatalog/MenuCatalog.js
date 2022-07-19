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
    

    return (
        <>     
        <section id={styles["all-listings"]}>
        <h1>TODAY MENU</h1>
       
        {menu.filter(foodItem => foodItem.type == typeMenu).map(foodItem => <MenuItem css = {styles} key = {foodItem._id} item = {foodItem} />)}

    <div className={styles["no-data-listing"]}>
        <p className={styles["no-offer"]}>There are no food...</p>
    </div>
    </section>
    </>
    )
}