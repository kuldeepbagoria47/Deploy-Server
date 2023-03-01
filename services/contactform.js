
import { Mlewebdb } from '../config/dbconfig.js';

export const ContactUs = async(cdata)=>{
    console.log(cdata)
    try {
        const cformdata = new Mlewebdb({
            name : cdata.name,
            email:cdata.email,
            phone: cdata.phone,
            message: cdata.message
        });
    
       var response = await cformdata.save();
       return response;
        
    } catch (e) {
        throw e
    }

}

