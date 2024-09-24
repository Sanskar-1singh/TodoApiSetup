
const Todoservice=require('../service/todo.service');
const TodoRepository=require('../repositories/todo.repo');

const todoservice=new Todoservice( new TodoRepository());

function getTodo(req,res){
    const response=todoservice.getAll();
    return res.json({
        data:response
    });
}

function createTodo(req,res){
     const todotext=req.body.todotext;
     todoservice.create(todotext);
    return res.json({
        data:"new todo created" 
    });
}

function updateTodo(req,res){
    const obj={};
    obj.index=req.index;
    obj.message=req.message;
console.log(obj);
       todoservice.update(obj.index,obj.messagemessage); 
    //todoservice.update(index,message);
     return res.json({
        data:"your data has been updated"
     })
}


module.exports={
    getTodo,
    createTodo,
    updateTodo
}