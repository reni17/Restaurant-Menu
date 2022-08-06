import {useEffect, useState} from 'react'
import * as authService from '../../../../services/authService'
import { OrderItem } from '../order-item/OrderItem';
import styles from './allOrders.module.css'
import uniqid from 'uniqid';

export const AllOrders = () => {
    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        authService.getOrders()
        .then(res => setOrders(res.result))
    }, [])

    console.log(Object.entries(orders));
    return (
        <section>
        <h1>All orders</h1>
        {Object.entries(orders).map(orderItem =>  <OrderItem css = {styles} key = {uniqid()} item = {orderItem}/>)}
        {/* {orders.map(user => <OrderItem css = {styles} key = {uniqid()} item = {user}/>)} */}
       {/* {orders.length>0 
       ? orders.map(x => x.map(orderItem =>  <OrderItem css = {styles} key = {uniqid()} item = {orderItem}/>) )
       : <div className={styles["no-data-listing"]}>
        <p className={styles["no-offer"]}>There are no orders...</p>
        </div>} */}
    
    </section>
    )
}