var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var routes = require("./routes/routes.js");

app.use("/css",express.static(__dirname+"/css"));
app.use("/js",express.static(__dirname+"/js"));
app.use("/",routes);

app.listen(port,function(){
  console.log("Server acitive on port:"+port);
});