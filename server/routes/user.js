const router = require('express').Router();
const controller = require('../controllers/user');
const foodController = require('../controllers/food')

//USERS REQUEST

router.get('/users', controller.getUsers);
router.get('/users/:userId', controller.getUser);
router.post('/users', controller.addUser);
router.post('/login', controller.login);
router.get('/logout', controller.logout)
//router.put('/:userId', controller.updateUser);
//router.delete('/:userId', controller.deleteUser);

//FOOD REQUESTS
router.get('/food',foodController.getAllFood)
router.get('/food/:foodId', foodController.getOneFood)
router.post('/food', foodController.addFood)
router.delete('/food/:foodId', foodController.deleteFood)
router.put('/food/:foodId', foodController.editFood)

router.get('/:userId/:foodId', controller.populateUser)
router.get('/userUpdate/:userId/:foodId', controller.updateUser)



// router.get('/delete-food/:userId/:foodId',foodController.deleteItem)
module.exports = router;
