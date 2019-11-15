const path = require("path");
const express = require("express");

const application = express();

const data_b = require('./Config/database')

data_b
    .authenticate()
    .then(() => {
        console.log('Conntection successful.');
    })
    .catch(err => {
        console.error('Connection failed :( :', err);
    });