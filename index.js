const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
const cors = require("cors");
const { routes } = require('./routes/router');

// require("./DB_Config/dbConnection");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

const port = 9090;

app.use(routes)


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
