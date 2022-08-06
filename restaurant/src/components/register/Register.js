import {register} from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'




export const Register = () => {
  const navigate = useNavigate()
  const {userLogin} = useContext(AuthContext)
  const [errors, setErrors] = useState({})


  const lengthErrorsHandler = (e, valueLength) => {
    setErrors(state => ({
      ...state,
      [e.target.name] : e.target.value.length < valueLength
    }))
   
  
  }
  
const regexErrorHandler = (e) => {
  const regex = RegExp('^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$', 'g');  
  const regex2 = RegExp('^0[1-9]{1}[0-9]{8}$', 'g')
  const str = e.target.value;
  
  let validEmail = regex.exec(str)
  let validPhone = regex2.exec(str)

  setErrors(state => ({
    ...state,
    [e.target.name]: !validEmail && !validPhone
  }))
}


  const onSubmit = (e)=> {
    e.preventDefault()

    const {email, phoneNumber, password, repeatPassword}= Object.fromEntries(new FormData(e.target))
   
    if(email == "" || phoneNumber == "" || password == "" || repeatPassword == ""){
      return window.confirm('All fields are required!')
    
    }else if(password !== repeatPassword ){
      window.confirm("Password don't match!")
      return 
    }else if(email.includes(' ') || phoneNumber.includes(' ') || password.includes(' ') || repeatPassword.includes(' ')){
      window.confirm("Invalid field content!")
      return 
    }else if(password.length<4) {
      window.confirm("Password must be at least 4 characters long!")
      return 
    }

   register(email, phoneNumber, password, repeatPassword)
    .then(data => {
      if(data.message){
        window.confirm(data.message)
        return
      }
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
        <h3 className="register-header">REGISTRATION</h3>
        <div className="card rounded-3">
          <img src="/img/registerPhoto.jpg"
            className="w-100" 
            alt=""/>
          <div className="card-body p-4 p-md-5">

          
            <form onSubmit={onSubmit} className="px-md-2">

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Email</label>
                <input onBlur={(e) => regexErrorHandler(e)} type="email" id="form3Example1q" className="form-control" name = "email"/>
              </div>
              {errors.email &&      
              <p className="form-error">Email is not valid!</p>
              }

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Phone number</label>
                <input onBlur={(e) => regexErrorHandler(e)} type="text" id="form3Example2q" className="form-control" name="phoneNumber" />
              </div>
              {errors.phoneNumber && <p className="form-error">Phone Number not valid!</p>}

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Password</label>
                <input onBlur={(e) => lengthErrorsHandler(e, 4)} type="password" id="form3Example3q" className="form-control" name = "password"/>
              </div>
              {errors.password && <p className="form-error">Password should be at least 4 characters long!</p>}

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