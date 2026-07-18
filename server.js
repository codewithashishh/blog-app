const express = require("express");
const path = require("path");
const port = 7000;
const app = express();
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const blogRouter = require("./router/allblog");
const createBlogRouter = require("./router/createBlog")



app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use("/", homeRouter);
app.use("/", userRouter);
app.use("/", blogRouter);
app.use("/", createBlogRouter);


app.listen(port, ()=>{
  console.log("Server started")
})
