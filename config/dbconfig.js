const mongoose = require('mongoose');
const {FormSchema} = require("../models/form");

const mleweb = "mongodb+srv://admin:admin@cluster0.krcgcdm.mongodb.net/mleweb?retryWrites=true&w=majority"

const Cform = mongoose.createConnection(mleweb,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})


const Mlewebdb = Cform.model('Mlewebdb', FormSchema);
module.exports ={Mlewebdb};