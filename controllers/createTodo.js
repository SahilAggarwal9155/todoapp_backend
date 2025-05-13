const Todo = require('../models/Todo')

//define route handler

exports.createTodo = async (req, res) => {
  try {
    //trying to extract the title and description from body
    const { title, description } = req.body;

    const response = await Todo.create({title, description});
    res.status(200).json({
      success: true,
      data: response,
      message: 'New Entry is created Successfully'
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message
    })
  }
}
