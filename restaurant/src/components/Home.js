import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
        <section className="banner">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h4>Here you can find delecious foods</h4>
                    <h2>Restaurant</h2>
                    
                  
                </div>
            </div>
        </div>
    </section>


    <section className="cook-delecious">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-md-offset-1">
                    <div className="first-image">
                        <img src="/img/cook_01.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cook-content">
                        <h4>We cook delicious</h4>
                        <div className="contact-content">
                            <span>You can call us on:</span>
                            <h6>+ 1234 567 8910</h6>
                        </div>
                        <span>or</span>
                        <div className="primary-white-button">
                            <Link to="/menus/" className="scroll-link" data-id="book-table">Look at our menus</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="second-image">
                        <img src="/img/cook_02.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}