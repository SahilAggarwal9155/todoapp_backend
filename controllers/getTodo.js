const Todo = require('../models/Todo');

exports.getTodo = async(req,res)=>{
  try{
    //fetch all items through database
    const allTodos = await Todo.find({});

    //response 
    res.status(200).json({
      success: true,
      data: allTodos,
      message: "Entire todo data is fetched successfully"
    })
  }
  catch(err){
    console.error(err);
    res.status(400).json({
      success: false,
      data: err.message,
      message: "Error in fetching todo data from database",
    })
  }
}

exports.getTodoById = async(req,res)=>{
  try{
    //fetch the related data of this id through database
    const { params: {id}} = req;
    
   const singleTodo = await Todo.findById( { _id: id });
    //response 
    if(!singleTodo){
      return res.status(400).json({
        success: false,
        message: "This Id data is not available in database. Please try another Id",
      })
    }

    return res.status(200).json({
      success: true,
      data: singleTodo,
      message: "Single todo data is fetched successfully"
    })
  }
  catch(err){
    console.error(err);
    res.status(400).json({
      success: false,
      error: err.message,
      message: "This Id data is not available in database. Please try another Id",
    })
  }
}