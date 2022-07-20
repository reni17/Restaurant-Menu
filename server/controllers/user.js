const { userModel } = require('../models/User');
const { errorHandler } = require('../utils/errorHandler');
const { ValidationError } = require('../utils/createValidationError');
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

//Working Routes
const getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId).populate('orders')
    
    if (!user) {
      throw new ValidationError('There is no such user with provided id.', 404);
    }

    res.status(200).json({ user: user.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const addUser = async (req, res) => {
  const { email, password, phoneNumber} = req.body;
  const data = {  email, password, phoneNumber};

  try {
    const createdUser = await userModel.create({...data});

    res.status(200).json({ createdUser });
  } catch (error) {
    errorHandler(error, res, req);
  }

}
  const populateUser = async(req, res) => {
    
    const order = mongoose.Types.ObjectId(req.params.foodId)
    console.log(order);
    const user = await userModel.findById(req.params.userId).populate('orders')
    user.orders.push(order)
    user.save()
    res.status(200).json({ user: user.toObject() });
  }
;
//
// const updateUser = async (req, res) => {
//   const { userId } = req.params;
//   const { email, password, phoneNumber } = req.body;
//   const data = { firstName, lastName, email, imageUrl, phoneNumber, address };

//   try {
//     const user = await userModel
//       .findByIdAndUpdate(userId, data, { runValidators: true, new: true })
//       .select('firstName lastName email imageUrl phoneNumber createdAt updatedAt');

//     res.status(200).json({ user: user.toObject() });
//   } catch (error) {
//     errorHandler(error, res, req);
//   }
// };

// const deleteUser = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     await userModel.findByIdAndUpdate(userId, { isDeleted: true });

//     res.status(200).json({ userId });
//   } catch (error) {
//     errorHandler(error, res, req);
//   }
// };

const getUsers = async (req, res) => {
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
    const count = await userModel.countDocuments();
    let users = await userModel
      .find()
      .lean();

    res.status(200).json({ users, count });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(200).json({ users: [], count: 0 });
    }

    errorHandler(error, res, req);
  }
};

module.exports = {
  getUser,
  addUser,
  // updateUser,
  // deleteUser,
  getUsers,
  populateUser
};
