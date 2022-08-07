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
  const response = await fetch(`http://localhost:3005/restaurant/food/${foodId}`, {
     method: 'DELETE'
    
  })
  return response
}

export const editFood = async (foodId, data) => {

const response = await fetch(`http://localhost:3005/restaurant/food/${foodId}`, {
method: 'PUT',
headers: {
  'content-type': 'application/json'
},
body: JSON.stringify(data)
})

const result = await response.json()
return result.editedFood
}

