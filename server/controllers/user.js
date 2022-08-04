const { userModel } = require('../models/User');
const {foodModel} = require('../models/Food')
const { errorHandler } = require('../utils/errorHandler');
const { ValidationError } = require('../utils/createValidationError');
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const secret = 'hduerhef748fuheri'


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


const createToken = (user) => {

  const payload = { _id: user._id, email: user.email}
  
  return new Promise((resolve, reject) => {
     jwt.sign(payload, secret, { expiresIn: "2d" }, (err, decodedToken) => {
              if(err){
                  reject(err)
                  console.log("Error");
              }
              resolve(decodedToken)
            });
  })  
  }

  
// LOGIN
const loginHandler = async (email, password) => {
    
    const user = await userModel.findOne({ email });
console.log(user);
    if (!user) {
      throw { message: "Email is not valid" };
    }
console.log(user.password, password);
    const validPass = await bcrypt.compare(password, user.password);


    if (!validPass) {
      throw { message: "Password is not valid" };
    }

return user
};


  const login = async(req, res) => {
    const {email, password} = req.body

    try{

      const user = await loginHandler(email, password)
  
      const token = await createToken(user)
      res.cookie('session', token, {httpOnly: true})
      res.status(200).json({ email: user.email, _id: user._id, accessToken: token });

  }catch(error){
   console.log(error);
  }
  }



// REGISTER

const addUser = async (req, res) => {
  const { email, phoneNumber, password, repeatPassword} = req.body;

  const data = { email, phoneNumber, password};

  if (password !== repeatPassword) {
    res.status(404).send({error: "Password don't match"})
  }

  try {
    const createdUser = await userModel.create({...data});
    const token = await createToken(createdUser)
 
    const cookie = res.cookie('session', token, {httpOnly: true})
    res.status(200).json({ email: createdUser.email, _id: createdUser._id, accessToken: token });

  } catch (error) {
    errorHandler(error, res, req);
  }

}

//LOGOUT
const logout = (req, res) => {
 
  const cookie = res.clearCookie("session");
  res.status(200).json({cookie: "done"});
}

  const populateUser = async(req, res) => {
   
    const order = mongoose.Types.ObjectId(req.params.foodId)
    const user = await userModel.findById(req.params.userId).populate('orders')
    user.orders.push(order)
    user.save()
    res.status(200).json({ user: user.toObject() });
  }

  const updateUser = async(req, res) => {
    
//  const order = foodModel.findById(req.params.foodId)
try {
     const user = await userModel.findById(req.params.userId)


    user.orders = user.orders.filter(item => item._id != req.params.foodId )
    user.save()

    res.status(200).json({ user: user.toObject() });
} catch (error) {
  console.log(error);
}
 
  }
;
// //
// const updateUser = async (req, res) => {
//   const { userId } = req.params;
//   const { email, password, phoneNumber, orders } = req.body;
//   const data = {  email, password, phoneNumber, orders };
// console.log(data);
//   try {
//     const user = await userModel
//       .findByIdAndUpdate(userId, data, { runValidators: true, new: true })


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
   updateUser,
  // deleteUser,
  getUsers,
  populateUser,
  createToken,
  login,
  logout
};
