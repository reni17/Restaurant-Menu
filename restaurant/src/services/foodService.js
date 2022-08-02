export const getOne =async (id) => {

    let req =  await fetch(`http://localhost:3005/restaurant/food/${id}`)
    let res =  await req.json()
  
    return res
  }
  
  
  export const  getAll = async() => {
      
    let req= await fetch(`http://localhost:3005/restaurant/food/`)
    let res = await req.json()
   return res
  }
  

  
 export const create = async (data) => {

  const response = await fetch('http://localhost:3005/restaurant/food', {
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify(data)
  })
  const result =await response.json()
  return result.createdFood
}

export const deleteFood = async (foodId) => {
  console.log('delete');
  const result = await fetch(`http://localhost:3005/restaurant/food/${foodId}`, {
     method: 'DELETE'
    
  })
  return result
}

  // export const updateFood = (id, data) => {
  //   console.log(data);
  // return fetch(`http://localhost:3005/restaurant/update-food/${id}`, {
  //   method: "PUT",
  // body: JSON.stringify(data)
    
  // })
  // .then(res=> res.json())

  // }