const todoModel = require('../models/todo.model')


async function CreateTodo (req,res){

    const{title,content} = req.body;

    if(!title || !content){
        return res.status(401).json({
            message:"please fill all fields"
        })

        
    }
    const todo = new todoModel({
            title,
            content
        })

        await todo.save();
        return res.status(201).json({
            message:"Todo Created",
            Todo:todo
        })

}

async function GetTodo(req,res) {

    try{

        const allTodo = await todoModel.find();
        return res.status(200).json({
            message: "All Todos",
            Todos: allTodo
        })

    }
    catch(err){
           return res.status(401).json({
            message: err,
            
        })

    }
    
}

async function UpdateTodo(req,res) {
    const todoId = req.params.todoId;
      const {title} = req.body;
      
    const todo = await todoModel.findByIdAndUpdate(todoId,{title},{new:true});
    await todo.save();
    return res.status(200).json({
            message: "Updated Success",
            Todos: todo
        })
 
    
}

async function Deletetodo(req,res) {

    try{
          const todoId = req.params.todoId;
          await todoModel.findByIdAndDelete(todoId);
           return res.status(200).json({
            message: "Todo Deleted",
       
        })
 

    }
    catch(err){
        return res.status(401).json({
            message: err,
 
        })
 
    }
  
    
}


module.exports = {
    CreateTodo,
    GetTodo,
    UpdateTodo,
    Deletetodo
}