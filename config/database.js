const mongoose= require('mongoose');

require('dotenv').config();
const dbConnect = ()=>{
  mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log(`database id connected`);
  }).catch((err)=>{
    console.log(`database is not connected successfully`,err);
    process.exit(1);
  })
}

module.exports = dbConnect;