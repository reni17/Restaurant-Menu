import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Menues = () => {


    return (
     <section className="services">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <Link to = '/menus/breakfast'>
                        <img src="/img/cook_breakfast.png" alt="Breakfast"/>
                        <h4>Breakfast</h4>
                        </Link>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <Link to = '/menus/lunch'>
                        <img src="/img/cook_lunch.png" alt="Lunch"/>
                        <h4>Lunch</h4>
                        </Link>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                    <Link to = '/menus/dinner'>
                        <img src="/img/cook_dinner.png" alt="Dinner"/>
                        <h4>Dinner</h4>
                    </Link>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <Link to="/menus/dessert">
                        <img src="/img/cook_dessert.png" alt="Desserts"/>
                        <h4>Desserts</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
   
}