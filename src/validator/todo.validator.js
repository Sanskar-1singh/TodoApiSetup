function createvalidate(req,res,next){
    if(!req.body.todotext){
        return res.json({msg:"invalid request"});
    }
    next();
}

module.exports={
    createvalidate
}