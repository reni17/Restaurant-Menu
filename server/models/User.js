const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 12

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: [10, 'Email should be at least 10 characters long!'],
        
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: [4, 'Password  should be at least 4 characters long!']
    },
    isAdmin: {
       type: Boolean,
       default: false,
      
    },
    phoneNumber:{
        type: String,
        required: [true, 'Phone number is required'],
        min: [10, 'Phone number  should be at least 10 characters long!']
    },
   orders: [{
    type: mongoose.Types.ObjectId,
       ref: 'Food'
   }]
})

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRounds)
    .then(hashedPassword => {
     this.password = hashedPassword
     next()
    })
 })

const userModel = mongoose.model('User', UserSchema);
module.exports = {
    userModel,
};
