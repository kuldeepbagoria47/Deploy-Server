import  express  from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Cors from 'cors'
import router from './routes/router.js';
import ErrorHandler from './Utils/errorHandler.js';
import * as dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(ErrorHandler)
app.use(router);

// app.get('/*',(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,'CLIENT','dist')))
//     res.sendFile(path.resolve(__dirname,'CLIENT','dist'))
// })

app.listen(process.env.PORT, () => {
    console.log(`server is running at port no ${process.env.PORT}`);
});
