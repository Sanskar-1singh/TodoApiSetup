const express=require('express');

const homepingcontroller=require('../../controller/home.controller');

const v2route=express.Router();
v2route.get('/ping',homepingcontroller);

module.exports=v2route;