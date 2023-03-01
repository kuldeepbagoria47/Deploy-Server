import mongoose from 'mongoose';
import { Schema } from 'mongoose';



export const FormSchema = new Schema ({
    name:{
        type:String,
        required: false
    },
    email: {
        type: String,
        required: false,
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

