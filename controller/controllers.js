
import { ContactUs } from '../services/contactform.js';

export const SubmitFormdata = async(req,res,next) =>{

    try {
        const data = req.body;
        console.log(data)
        await ContactUs(data)

         res.status(200).json({
            success: true,
            status: 200,
            message:"data saved successfully"
        })

    } catch (e) {
     
        next(e)
    }
}



