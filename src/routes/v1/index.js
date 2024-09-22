const express=require('express');

const homepingcontroller=require('../../controller/home.controller');
const todorouter = require('./todorouter');

const v1route=express.Router();
v1route.get('/ping',homepingcontroller);
v1route.use('/todos',todorouter)

module.exports=v1route;