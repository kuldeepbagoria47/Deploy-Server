import { SubmitFormdata } from '../controller/controllers.js';
import { Router as expressRouter  } from 'express';

const router = expressRouter();
router.post('/contactus',SubmitFormdata )
// router.post('/', (req,res)=>{
//     res.send('Hello')
// } )

export default router;
