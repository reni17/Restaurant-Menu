import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AdminContext } from "../../contexts/AdminContext";
export const Navbar = () => {
    const {user} = useContext(AuthContext)
    const {isAdmin, admin} = useContext(AdminContext)

    isAdmin(user._id)

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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menus'>Our menus</Link></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        {admin &&
                        <li><Link to ='/add-food'>Add Food</Link></li>
                        }
                        {user.email 
                        ?
                        <div>
                             <li><Link to="/logout">Logout</Link></li> 
                             <li><NavLink to="/shopping-cart" style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>Shopping Cart
                            </NavLink>
                             </li>
                        </div>
                        : <div>
                         <li><Link to='/register'>Register</Link></li> 
                         <li><Link to='/login'>Login</Link></li>   
                         
                       
                        </div>
                    }
                      

                    </ul>
                </div>

            </nav>
  
        </div>
  
    </div>
    )
}