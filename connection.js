const mongoose = require("mongoose");

const connectDb = function mongoConnection(URL){
  mongoose.connect(URL)
  .then(()=>{
    console.log("Database connected ")
  })
  .catch((err)=>{
    console.log(err)
  })
}

module.exports = {connectDb};