function customcontroller(req,res){
    //collect the request 
    //send it to service
    //and then prepare and send response
    return res.json({msg:"from custom"});
}

module.exports={
    customcontroller
}