import {register} from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'



export const Register = () => {
  const navigate = useNavigate()
  const {userLogin} = useContext(AuthContext)

  const onSubmit = (e)=> {
    e.preventDefault()
    const {email, phoneNumber, password, repeatPassword}= Object.fromEntries(new FormData(e.target))
    if(password !== repeatPassword){
      return
    }
   register(email, phoneNumber, password, repeatPassword)
    .then(data => {
      userLogin(data)
      navigate('/')
    })
    .catch(() => navigate('/'))
  }
    return(
         
  <section id = "registerSection" className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="register-container col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="/img/registerPhoto.jpg"
            className="w-100" 
            alt=""/>
          <div className="card-body p-4 p-md-5">

          <h3 className="register-header mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">REGISTRATION</h3>
            <form onSubmit={onSubmit} className="px-md-2">


              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Email</label>
                <input type="email" id="form3Example1q" className="form-control" name = "email"/>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Phone number</label>
                <input type="text" id="form3Example2q" className="form-control" name="phoneNumber" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Password</label>
                <input type="password" id="form3Example3q" className="form-control" name = "password"/>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Repeat Password</label>
                <input type="password" id="form3Example4q" className="form-control" name = "repeatPassword"/>
              </div>

              <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                className="fw-bold text-body"><u>Login here</u></a></p>


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