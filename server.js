const express = require("express");
const path = require("path");
const session = require("express-session");
const port = 7000;
const app = express();
const {connectDb} = require("./connection");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const blogRouter = require("./router/allblog");
const createBlogRouter = require("./router/createBlog");
const signupRouter = require("./router/signup");
const loginRouter = require("./router/login");



app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDb("mongodb://127.0.0.1:27017/url-shortener");

app.use(
  session({
    secret: "haleluyah",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use("/", homeRouter);
app.use("/", userRouter);
app.use("/", blogRouter);
app.use("/", createBlogRouter);
app.use("/", loginRouter);
app.use("/", signupRouter);


app.listen(port, ()=>{
  console.log("Server started")
})
