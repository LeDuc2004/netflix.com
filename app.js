const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const Account = require("./routes/Account.routes");


const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456789",
  database: "auth",
};
const sessionStore = new MySQLStore(options);
const fs = require('fs');
const db = require("./utils/database");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser("mysecret"));
app.use(cors());

app.use(
  session({
    secret: "mysecrettuytut",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

const { isAuthen } = require("./middlewares/middleware")


app.get("/logout", (req, res)=> {
  req.session.destroy((err)=> {
   
      if (err) console.log(err);
          res.redirect("/dangnhap")
  })
})
app.use("/ttuser", Account);
app.get("/hanhdong" , (req , res)=>{
   res.render("hanhdong")
})
app.get("/tinhcam" , (req , res)=>{
  res.render("tinhcam")
})
app.get("/hoathinh" , (req , res)=>{
  res.render("hoathinh")
})
app.get("/haihuoc" , (req , res)=>{
  res.render("haihuoc")
})
app.get("/kinhdi" , (req , res)=>{
  res.render("kinhdi")
})

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/xemPhim", (req, res) => {

  if (req.query.name.split('').length > 60) {
    res.render("xemPhim");
  }else{
    res.render("home");
  }


});

app.get("/home", isAuthen , (req, res) => {

  res.render("home");
});
app.get("/dangnhap", (req, res) => {
  res.render("login");
});
app.get("/dangky", (req, res) => {
  res.render("sign");
});

app.listen(3000, () => {
  console.log("server listening on http://localhost:3000");
});
