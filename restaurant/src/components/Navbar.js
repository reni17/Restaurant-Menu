import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <div className="header">
        <div className="container">
            <a href="#" className="navbar-brand scroll-top">Victory</a>
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
                        <li><Link to='/register'>Register</Link></li> 
                        <li><Link to='/login'>Login</Link></li>   
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>

            </nav>
  
        </div>
  
    </div>
    )
}