const express  = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors =  require("cors")
const authRouter = require('./routes/auth/auth-routes')
const adminProductsRouter = require('./routes/admin/products-routes')

// Here also create database  connection -> in direct connenct
// create  seperate file for database connection  and import in this file to get connected
 

mongoose.connect("mongodb://127.0.0.1:27017/ecom")
.then(()=> console.log("MOngoDB is Connected Successfull!"))
.catch((error) => console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);

app.listen(PORT, ()=> console.log(`Seever is runing on port ${PORT}`))