import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AdminContext } from "../../contexts/AdminContext";
import * as authService from '../../services/authService'

export const Navbar = () => {
    const {user} = useContext(AuthContext)
    const {isAdmin, admin} = useContext(AdminContext)

  if(user._id){
     authService.getUser(user._id)
        .then(res => isAdmin(res.user))
  }
       

  
    let activeStyle = {
        textDecoration: "underline",
      };
    return(
        <div className="header">
        <div className="container">
            <a href="#" className="navbar-brand scroll-top">Restaurant</a>
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div id="main-nav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><NavLink to='/' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>Home
                            </NavLink>
                        </li>
                        <li><NavLink to='/menus' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>Our menus
                            </NavLink>
                        </li>
                       
                        
                        {user.email 
                        ?
                        <>
                            <li><Link to="/logout">Logout</Link></li> 
                            
                            <li><NavLink to="/shopping-cart" style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>Shopping Cart
                            </NavLink>
                            </li>
                            {admin &&    
                            <>
                            <li><NavLink to ='/add-food' style={({ isActive }) =>
                                isActive ? activeStyle : undefined}>Add Food
                            </NavLink>
                            </li>
                            
                            <li><NavLink to ='/all-orders' style={({ isActive }) =>
                                isActive ? activeStyle : undefined}>All Orders
                            </NavLink>
                            </li>
                            </> 
                            }
                        </>
                        : <>
                            <li><NavLink to='/register' style={({ isActive }) =>
                                isActive ? activeStyle : undefined}>Register
                                </NavLink>
                            </li> 
                            <li><NavLink to='/login' style={({ isActive }) =>
                                isActive ? activeStyle : undefined}>Login
                                </NavLink>
                            </li>   
                         
                       
                        </>
                    }
                      

                    </ul>
                </div>

            </nav>
  
        </div>
  
    </div>
    )
}