const express = require('express');
const todoRoutes = require('./routes/todos')

const dbConnect = require('./config/database')

const app = express();
app.use(express.json());

app.use('/api/v1', todoRoutes);

app.listen(3000,()=>{
  console.log(`App is running on this port 3000`)
})

dbConnect();

app.get('/',(req,res)=>{
  res.send(`<h1>This is home page</h1>`);
})