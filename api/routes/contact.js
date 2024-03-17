const express = require('express')
const router = express.Router()

// const Contact = require('../models/Contact')

const contactController=require('../controllers/contact')

router.get('/', contactController.getAllContactController)
router.post('/', contactController.postNewContactController)
router.get('/:id', contactController.getSingleContactController)
router.delete('/:id', contactController.deleteSingleContactController)
router.put('/:id', contactController.updateSingleContactController)


// const contacts=[];

//get

// router.get('/', (req, res, next) => {
//     // res.status(200).json({
//     //     contacts
//     // })

//     // Contact.find()
//     //     .then(data => {
//     //         res.status(200).json({
//     //             message: "Data Successfuly Fetched",
//     //             contacts: data
//     //         })
//     //     })
//     //     .catch(err => {
//     //         res.status(500).json({
//     //             message: "Error Occured",
//     //             error:err
//     //         })
//     //     })



// })

// router.post('/', (req, res, next) => {
    
//     // contacts.push({
//     //     name: req.body.name,
//     //     email: req.body.email
//     // })
//     // res.status(201).json({
//     //     message:"POST Method Success",
//     // })

//     // const contact = new Contact({
//     //     name: req.body.name,
//     //     phone: req.body.phone,
//     //     email: req.body.email
//     // })
//     // contact.save()
//     //     .then(data => {
//     //         res.status(201).json({
//     //             message: "Data Successfuly Inserted",
//     //             contact: data
//     //         })
//     //     })
//     //     .catch(err => {
//     //         res.status(500).json({
//     //             message: "Error Occured",
//     //             error:err
//     //         })
//     //     })
// })

//url extract method
// router.get('/:id', (req, res, next) => {
//     // console.log(req.url)
//     const id = req.params.id
//     res.json({
//         id
//     })
// })


module.exports = router