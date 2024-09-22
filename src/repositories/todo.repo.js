const todo=[];

class TodoRepository{

    insert(todotext){
        todo.push({id:todo.length,text:todotext});
    }

    getAll(){
        return todo;
    }

    getUpdate(id,todotext){
        todo[id]=todotext;
    }
    get(id){
        return todo.filter(todo=>todo.id==id)[0];
    }
}

module.exports=TodoRepository;