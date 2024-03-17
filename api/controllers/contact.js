const Contact = require('../models/Contact')

const getAllContactController = (req, res, next) => {
    Contact.find()
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
}

const postNewContactController = (req, res, next) => {
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    contact.save()
        .then(data => {
            res.status(201).json({
                message: "Data Successfuly Inserted",
                contact: data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Error Occured",
                error: err
            })
        })

}


const getSingleContactController = (req, res, next) => {
    const id = req.params.id;
    // console.log(id)
    Contact.findById(id)
    .then(data => {
        res.status(201).json({
            message: "Data Found Successfully",
            contact: data
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Error Occured",
            error: err
        })
    })
        
}

const deleteSingleContactController = (req, res, next) => {
    const id = req.params.id;
    //console.log(id)
    Contact.findByIdAndDelete(id)
    .then(data => {
        res.status(201).json({
            message: "Data Deleted Successfully",
            contact: data
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Error Occured",
            error: err
        })
    })
}


const updateSingleContactController = (req, res, next) => {
    const id = req.params.id;
    //console.log(id)
    const updatedcontact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    //console.log(updatedcontact)
    Contact.findByIdAndUpdate(id, updatedcontact,)
    .then(data => {
        res.status(201).json({
            message: "Data Updated Successfully",
            contact: data
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Error Occured",
            error: err
        })
    })
}

module.exports = {
    getAllContactController,
    postNewContactController,
    getSingleContactController,
    deleteSingleContactController,
    updateSingleContactController
}