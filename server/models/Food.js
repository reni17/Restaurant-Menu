const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [3, 'Name should be at least 3 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    description: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true,
        enum: ['breakfast', 'lunch', 'dinner', 'dessert']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required'],
        validate: {
             validator: /^http?/g,
             message: 'Image should be a link!'
        }
    }
    // details: {
        
    // }
})

const foodModel = mongoose.model('Food', foodSchema);
module.exports = {
    foodModel,
};
