const Todo = require('../models/Todo');

exports.updateTodo = async(req,res)=>{
  try{
     const { id } = req.params;
     const { title,description} = req.body;

     const todo = await Todo.findByIdAndUpdate({_id: id},{title,description, updatedAt: Date.now()})

     res.status(200).json({
      success: true,
      data: todo,
      message: "This todo data is updated successfully"
     })
  }
  catch(err){
    res.status(400).json({
      success: true,
      error: err.message,
      message: "Error in update data"
     })
  }
}