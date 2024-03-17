const User = require('../models/User'); // Assuming the model is for User, not Contact
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = (req, res, next) => {
    const { email, password } = req.body; // Destructure email and password from req.body

    bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
            return res.status(500).json({
                message: "Error in hashing the password",
                error: err
            });
        }

        const newUser = new User({
            email: email,
            password: hash
        });

        newUser.save()
            .then(data => {
                res.status(201).json({
                    message: "User created successfully",
                    user: data
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error in creating user",
                    error: err
                });
            });
    });
};



const getAllUser = (req, res, next) => {
    User.find()
        .then(data => {
            res.status(200).json({
                message: "Data Successfuly Fetched",
                contacts: data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Error Occured",
                error: err
            })
        })
};


const loginController = (req, res, next) =>  {
    const { email, password } = req.body;
        User.findOne({email})
            .then(data => {
                if(data)
                {
                    bcrypt.compare(password, data.password, function(err, result) {
                        if (err) {
                            return res.status(500).json({
                                message: "Error in comparing the password",
                                error: err
                            });
                        }
                        if(result)
                        {
                            let token=jwt.sign({email: data.email, _id: data._id},'SECRET',{expiresIn: '2h'}); // Secret should be a long random string

                            res.status(200).json({
                                message: "User logged in successfully",
                                user: data,
                                token
                            });
                        }
                        else
                        {
                            res.status(401).json({
                                message: "Wrong Password"
                            });
                        }
                    });
                }
                else
                {
                    res.status(404).json({
                        message: "User not found"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error in creating user",
                    error: err
                });
            });
    }


module.exports = {
    registerController,
    getAllUser,
    loginController
};
