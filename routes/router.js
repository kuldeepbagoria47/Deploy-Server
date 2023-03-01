import { SubmitFormdata } from '../controller/controllers.js';
import { Router as expressRouter  } from 'express';

const router = expressRouter();
router.post('/contactus',SubmitFormdata )

export default router;
