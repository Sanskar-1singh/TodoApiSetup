const express=require('express');
const { customcontroller } = require('../controller/customcontroller');

const customrouter=express.Router();

customrouter.get('/custom1',customcontroller);
customrouter.get('/custom2',customcontroller);

module.exports=customrouter;