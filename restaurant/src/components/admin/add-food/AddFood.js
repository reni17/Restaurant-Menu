import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as foodService from "../../../services/foodService"
export const AddFood = () => {
    const navigate = useNavigate()

const [values, setValues] = useState({
    name: '',
    price: '',
    description: '',
    type: '',
    imageUrl: ''
})

const changeHandler = (e) => {
    setValues(state => ({
        ...state,
        [e.target.name]: e.target.value
      }))
}

const submitHandler = (e) => {
    e.preventDefault()
    
    const {...data} = values
    foodService.create(data)
    navigate('/')
}

    return (
        <section className=" loginSection h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="login-container col-lg-8 col-xl-6">
              <div className="card rounded-3">
              
                <div className="card-body p-4 p-md-5">
                  
      
                  <form onSubmit={submitHandler} className="px-md-2">
      
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Name</label>
                      <input type="text" id="form3Example1q" className="form-control" name = "name" value = {values.name} onChange = {changeHandler}/>
                    </div>
    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Price</label>
                      <input type="number" id="form3Example1q" className="form-control" name = "price"  value = {values.price} onChange = {changeHandler}/>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Description</label>
                      <input type="text" id="form3Example1q" className="form-control"  name = "description"  value = {values.description} onChange = {changeHandler}/>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Type</label>
                      <input type="text" id="form3Example1q" className="form-control" name = "type"  value = {values.type} onChange = {changeHandler}/>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Image</label>
                      <input type="text" id="form3Example1q" className="form-control" name = "imageUrl"  value = {values.imageUrl} onChange = {changeHandler}/>
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