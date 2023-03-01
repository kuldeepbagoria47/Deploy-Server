const {Mlewebdb} = require('../config/dbconfig')

exports.HelloWorld = async(req,res)=>{
    res.send("Hello World")
}

exports.ContactUs = async(req, res)=>{
    
    const formdata = new Mlewebdb({
        name : req.body.name,
        email:req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });

    await formdata.save();
    res.json(
        {
            status: 200,
            message: "data submitted"
        }
    )
   // res.send('hello from contact us controller')
}