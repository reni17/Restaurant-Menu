import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as foodService from "../../../services/foodService"


export const EditFood = (props) => {
    const {foodId} = useParams()
    const [food, setFood] = useState({});
 
    // const [values, setValues] = useState({
    //     name: food.name,
    //     price: food.price,
    //     description: food.description,
    //     type: food.description,
    //     imageUrl: food.imageUrl
    // })

    useEffect(() => {
      foodService.getOne(foodId).then(res => setFood(res.food));
    }, [foodId]);



    const navigate = useNavigate()

    

    const submitHandler = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        data.price = Number(data.price)
       
        const edited = foodService
        .editFood(food._id, data)
        .then((res) =>setFood(res))
        navigate('/menus')
        
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
                      <input type="text" id="form3Example1q" className="form-control" name="name" defaultValue= {food.name} />
                    </div>
    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Price</label>
                      <input type="text" id="form3Example1q" className="form-control" name="price"  defaultValue= {food.price} />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Description</label>
                      <input type="text" id="form3Example1q" className="form-control" name="description"   defaultValue= {food.description} />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Type</label>
                      <input type="text" id="form3Example1q" className="form-control" name="type"  defaultValue= {food.type} />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Image</label>
                      <input type="text" id="form3Example1q" className="form-control" name="imageUrl"  defaultValue= {food.imageUrl} />
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