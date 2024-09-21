const express=require('express');
const { PORT }=require('./config/serverconfig');
const router=require('./routes/index');
const  customrouter=require('./routes/customrouter');


const app=express();


app.use('/',router);
app.use('/custom',customrouter);

app.listen(PORT,()=>{

    console.log(`server stared at port ${PORT}`);
})

//routing layer>>>>
//app.get('/home',homepingcontroller);
   