import { useEffect, useState } from "react"
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom"

import { Details } from "./Details/Details"

export const MenuItem = (props) => {

 
  
    return(
      <>

        <div className= {props.css["card"]}>

        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <div>{props.item.name}</div>
        {/* <div className={props.css["cta-container"]}><button onClick={detailsHandler} className={props.css["det-link"]}>Details2</button></div> */}
        <div className={props.css["cta-container"]}><Link to = {`/details/${props.item.type}/${props.item._id}`} className={props.css["det-link"]}>Details</Link></div>
        <div className={props.css["card_circle"]}><img src={props.item.imageUrl} alt = ""/></div>
       
    </div>

    <section>
      {/* <Routes>
        <Route path = {'/menus/:typeMenu/:id'} element = {<Details food = {food} ></Details>}></Route>
      </Routes> */}
    </section>
    </>  
    )
}