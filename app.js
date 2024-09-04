const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
dotenv.config();
const OrdersRoute = require('./routes/orders');
app.use('/api', OrdersRoute)
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
  console.log("Database connted");
  const PORT = process.env.PORT || 3000;
  (PORT,() => console.log (`Sever running on port ${PORT} `));
})
.catch((err) => console.error("Datadase conntion error  : ",err.message));
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).json({message : " An unexpected error occurred"});
});