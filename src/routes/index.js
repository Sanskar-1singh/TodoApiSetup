const express=require('express');
const v1route=require('./v1/index');
const v2route=require('./v2/index');
const router=express.Router();

router.use('/v1',v1route);
router.use('/v2',v2route);

module.exports=router;