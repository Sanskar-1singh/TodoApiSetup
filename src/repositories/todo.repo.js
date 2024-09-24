const todo=[];

class TodoRepository{

    insert(todotext){
        todo.push({id:todo.length,text:todotext});
    }

    getAll(){
        return todo;
    }
    
    updateval(index,message){
        const obj={};
           obj.text=message;
           todo[index]=obj.text;
           return;
       }

    get(id){
        return todo.filter(todo=>todo.id==id)[0];
    }
}

module.exports=TodoRepository;