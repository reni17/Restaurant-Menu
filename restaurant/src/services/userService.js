export const getUser = (id) => {

    return  fetch(`http://localhost:3005/restaurant/users/${id}`)
   .then(res => res.json()) 
   .catch(err=> err)

  }


  export const populateUser = (userId, foodId)  => {
    return fetch(`http://localhost:3005/restaurant/${userId}/${foodId}`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }