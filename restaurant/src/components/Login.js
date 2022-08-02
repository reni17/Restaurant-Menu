import { login } from "../services/authService"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
export const Login = () => {
  const {userLogin} = useContext(AuthContext)
  let navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()

    const {email , password} = Object.fromEntries(new FormData(e.target))
    
    login(email, password)
    .then(data => {
    userLogin(data)
    navigate('/')
    })
    .catch(() => {
      navigate('/')
    }) 
  }

    return (
        <section className=" loginSection h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="login-container col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img src="/img/registerPhoto.jpg"
                  className="w-100" 
                  alt = ""
                  />
                <div className="card-body p-4 p-md-5">
                  <h3 id = "loginHeader" className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">LOGIN</h3>
      
                  <form onSubmit = {onSubmit} className="px-md-2">
      
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Email</label>
                      <input type="text" id="form3Example1q" className="form-control" name = "email"/>
                    </div>
    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Password</label>
                      <input type="password" id="form3Example1q" className="form-control" name = "password" />
                    </div>
    
    
                    <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>
      
                  </form>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}