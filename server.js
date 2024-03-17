const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts-db');

const db=mongoose.connection;
db.on('error', (err)=>{
    console.log(err);
})

db.once('open', ()=>{ 
    console.log('Database connection opened ')

});
// console.log(express);


// const Schema = mongoose.Schema;
// const contactSchema = new Schema({
//     name:
//     {
//         type: String,
//         required: true,
//         minlength: 10,
//     },
//     phone:{
//         type: String,
//         required: true,
//         minlength: 10,
//     }
// });

// const Connect = mongoose.model('Contact', contactSchema);


const contactRoute = require('./api/routes/contact');
const userRoute = require('./api/routes/user');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log("I am a middleware");
    next();
});

app.get('/',(req,res)=>{
    res.send("Hello, world!");
})

app.get('/posts',(req,res)=>{
    res.send("This is a post page");
})


app.use('/api/contacts',contactRoute);
app.use('/api/users',userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// const contacts = [
//     {name: 'John', email: 'test@example.com'},
//     {name: 'John Smith', email: 'test@example.com'}
// ]