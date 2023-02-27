const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
const cors = require("cors");

// require("./DB_Config/dbConnection");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

const port = 9090;

const path = require('path')


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
