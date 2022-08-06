import { login } from "../services/authService"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext, useState } from "react"
export const Login = () => {
  const [errors, setErrors] = useState({})
  const {userLogin} = useContext(AuthContext)
  let navigate = useNavigate()
 
  // const isEmpty = (value) => {
  //   if(value == '' || value.includes(' ')){
  //     return true
  //   }
  //   return false
  // }

  // const errorMessage = (data) => {
  //   if(data.message){
  //     return data.message
  //   }
  // }
  

  const onSubmit = (e) => {
    e.preventDefault()

    const {email , password} = Object.fromEntries(new FormData(e.target))

    if(email == "" || password == ""){
      return window.confirm('All fields are required!')
    
    }else if(email.includes(' ') || password.includes(' ')){
      window.confirm("Invalid field content!")
      return 
    }else if(password.length<4) {
      window.confirm("Password must be at least 4 characters long!")
      return 
    }
    

    login(email, password)
    .then(data => {
      if(data.message){
        window.confirm(data.message)
        return
      }
        userLogin(data)
        navigate('/')
     })
    .catch(() => {
      navigate('/login')
    }) 
  }


  const errorsHandler = (e, valueLength) => {
    setErrors(state => ({
      ...state,
      [e.target.name] : e.target.value.length < valueLength 
    }))
  }

 
const regexErrorHandler = (e) => {
  const regex = RegExp('^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$', 'g');  
  const str = e.target.value;

  let validEmail = regex.exec(str)

  setErrors(state => ({
    ...state,
    [e.target.name]: !validEmail
  }))
}

    return (
        <section className=" loginSection h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="login-container col-lg-8 col-xl-6">
            <h3 id = "loginHeader" className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">LOGIN</h3>

           

              <div className="card rounded-3">
                <img src="/img/registerPhoto.jpg"
                  className="w-100" 
                  alt = ""
                  />
                <div className="card-body p-4 p-md-5">
      
                  <form onSubmit = {onSubmit} className="px-md-2">
      
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Email</label>
                      <input onBlur = {(e) => regexErrorHandler(e)} type="text" id="form3Example1q" className="form-control" name = "email"/>
                    </div>
                    {errors.email &&  
                  <p className="form-error">Email is not valid!</p>
                }
    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Password</label>
                      <input onBlur = {(e) => errorsHandler(e, 4)} type="password" id="form3Example1q" className="form-control" name = "password" />
                    </div>
                    {errors.password &&  
                  <p className="form-error">Password must be at least 4 characters long!</p>
                }
    
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