class Todoservice{

    constructor(TodoRepository){
            this.TodoRepository=TodoRepository;
    }

    create(todotext){
        //bussiness logic
        this.TodoRepository.insert(todotext);
    }

    getOneTodo(id){
        return this.TodoRepository.get(id);
    }

    getAll(){
        return this.TodoRepository.getAll();
    }
}

module.exports=Todoservice;