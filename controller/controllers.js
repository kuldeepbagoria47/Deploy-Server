
import { ContactUs } from '../services/contactform.js';

export const SubmitFormdata = async(req,res) =>{

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
        // return res.status(500).json({
        //     status: 500,
        //     message:e.message
        // })
        next(e)
    }
}



