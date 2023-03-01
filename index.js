import  express  from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Cors from 'cors'
import router from './routes/router.js';


const app = express();

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


const port = 9090;

app.use(router);


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
