const express=require('express');
const { getTodo, createTodo } = require('../../controller/todocontroller');
const  { createvalidate }=require('../../validator/todo.validator');

const todorouter=express.Router();

todorouter.get('/use',getTodo);
todorouter.post('/use',createvalidate,createTodo);

module.exports=todorouter;