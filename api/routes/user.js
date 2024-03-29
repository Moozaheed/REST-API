const express=require('express')
const router=express.Router()
const authenticate = require('../middleware/authenticate')
const userController=require('../controllers/user')

router.post('/register', userController.registerController)
router.post('/login', userController.loginController)
router.get('/',authenticate, userController.getAllUser)

module.exports = router
