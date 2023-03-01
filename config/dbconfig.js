import mongoose from 'mongoose';
import { FormSchema } from '../models/form.js';


const mleweb = "mongodb+srv://admin:admin@cluster0.krcgcdm.mongodb.net/mleweb?retryWrites=true&w=majority"

const Cform = mongoose.createConnection(mleweb,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})


export const Mlewebdb = Cform.model('Mlewebdb', FormSchema);

