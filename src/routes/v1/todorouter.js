const express=require('express');
const { getTodo, createTodo, updateTodo } = require('../../controller/todocontroller');
const  { createvalidate }=require('../../validator/todo.validator');

const todorouter=express.Router();

todorouter.get('/use',getTodo);
todorouter.post('/use',createvalidate,createTodo);
todorouter.put('/using',updateTodo);



module.exports=todorouter;