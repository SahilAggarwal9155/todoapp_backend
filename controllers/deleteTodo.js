const Todo = require('../models/Todo');

exports.deleteTodo = async(req,res)=>{
  try{
     const { id } = req.params;

     const todo = await Todo.findByIdAndDelete(id);

     res.status(200).json({
      success: true,
      message: "This todo data is deleted successfully"
     })
  }
  catch(err){
    res.status(400).json({
      success: true,
      error: err.message,
      message: "Error in deleting data"
     })
  }
}