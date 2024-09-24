function createvalidate(req,res,next){
    if(!req.body.todotext){
        return res.json({msg:"invalid request"});
    }
    next();
}

function updating(req,res,next){

    if(typeof req.body.index !="number"){
        return res.json({
            data:"your index is not valid"
        })
    }
    
    else
    next();
}


module.exports={
    createvalidate,
    updating
}