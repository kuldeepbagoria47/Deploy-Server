const mongoose = require('mongoose');
const schema = mongoose.Schema;


const FormSchema = new schema ({
    name:{
        type:String,
        required: false
    },
    email: {
        type: String,
        required: true,
    
     
    },
    phone:{
        type:String,
        required: false,
      
    },
    message: {
        type:String,
        required: false
    }

})

exports.FormSchema = FormSchema;