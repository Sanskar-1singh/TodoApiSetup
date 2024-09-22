const express=require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverconfig');
const  apirouter  =require('./routes/index.js');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


app.use('/api',apirouter);

app.listen(PORT,()=>{

    console.log(`server stared at port ${PORT}`);
})

//routing layer>>>>
//app.get('/home',homepingcontroller);
   