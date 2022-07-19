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
  