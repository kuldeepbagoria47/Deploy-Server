const express = require('express');
const router = express.Router();
const control = require("../services/controller")

router.get('/home', control.HelloWorld);

module.exports = {
    routes: router
}