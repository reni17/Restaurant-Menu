
import * as request from './requester' 

export const getUser = (id) => {

    console.log(id);  
    return  fetch(`http://localhost:3005/restaurant/users/${id}`)
   .then(res => res.json()) 
   .catch(err=> console.log(err))

  }


  export const populateUser = (userId, foodId)  => {
    return fetch(`http://localhost:3005/restaurant/${userId}/${foodId}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

export const updateUser  = (userId, foodId) => {
  return fetch(`http://localhost:3005/restaurant/userUpdate/${userId}/${foodId}`)
  .then(res => res.json())
  .catch(err=> console.log(err))


}


const baseUrl = 'http://localhost:3005/restaurant'

export const login = (email, password) => request.post(`${baseUrl}/login`, {email, password})

export const register = (email, phoneNumber, password, repeatPassword) =>{
 return request.post(`${baseUrl}/users`, {email, phoneNumber, password, repeatPassword})
}

export const logout = ()=> {
 return fetch(`${baseUrl}/logout`)
 .then(() => localStorage.clear())
}

export const getOrders = () => {
  return fetch(`${baseUrl}/all-orders`)
  .then(res => res.json())
}