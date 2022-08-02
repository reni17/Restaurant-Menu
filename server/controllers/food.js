const { foodModel } = require('../models/Food');
const { errorHandler } = require('../utils/errorHandler');
const { ValidationError } = require('../utils/createValidationError');



const getAllFood = async (req, res) => {
    const page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 5;
    const sort = req?.query?.sort;
    const order = req?.query?.order;
    const search = req?.query?.search;
    const criteria = (req?.query?.criteria || '').trim();
    const skipIndex = (page - 1) * limit;
  
    const query = { isDeleted: false };
    const sortCriteria = {};
  
    if (sort && sort !== 'null' && order && order !== 'null') {
      sortCriteria[sort] = order;
    }
  
    if (search && search !== 'null' && criteria && criteria !== 'null') {
      query[criteria] = criteria == '_id' ? search : new RegExp(search, 'i');
    }
  
    try {
      const count = await foodModel.countDocuments();
      let food = await foodModel
        .find()
        .lean();
  
      res.status(200).json({ food, count });
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(200).json({ food: [], count: 0 });
      }
  
      errorHandler(error, res, req);
    }
  };



  const getOneFood = async (req, res) => {
    const { foodId } = req.params;
  
    try {
      const food = await foodModel.findById(foodId);
  
      if (!food) {
        throw new ValidationError('There is no such food with provided id.', 404);
      }
  
      res.status(200).json({ food: food.toObject() });
    } catch (error) {
      errorHandler(error, res, req);
    }
  };

  
const addFood = async (req, res) => {
    const { name, price, description, type, imageUrl, quantity} = req.body;
    const data = { name, price, description, type, imageUrl, quantity};
  
    try {
      const createdFood = await foodModel.create({...data});
  
      res.status(200).json({ createdFood });
    } catch (error) {
      errorHandler(error, res, req);
    }
  };

  const deleteFood = async (req, res) => {
try{
  const deletedFood = await foodModel.deleteOne({_id: req.params.foodId})
    res.status(200).json({ deletedFood });
}catch(err){
  errorHandler(error, res, req);
}
  
  }
  // const updateFood = async (req, res) => {
  //   console.log(req);
  //  const updatedFood = await foodModel.findByIdAndUpdate({_id: req.params.foodId}, {$set: req.body}, {runValidators: true})
  //  res.status(200).json({ food: updatedFood.toObject() });
  // }

  
module.exports = {
    getAllFood,
    getOneFood,
    addFood,
   deleteFood

}