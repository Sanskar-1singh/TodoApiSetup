const express=require('express');
const { homepingcontroller }=require('../controller/home.controller');

const router=express.Router();

router.get('/home',homepingcontroller);
router.get('/home2',homepingcontroller);

module.exports=router;