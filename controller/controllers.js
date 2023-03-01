
import { ContactUs } from '../services/contactform.js';

export const SubmitFormdata = async(req,res) =>{

    try {
        const {data} = req.body;
        console.log(data)
       var result = await ContactUs(data)

       res.status(200).json({
        status: 200,
        data:result,
        message:"data saved successfully"
       })

    } catch (e) {
        return res.status(500).json({
            status: 500,
            message:e.message
        })
    }
}



