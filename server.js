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

/*
// Use connect method to connect to the Server
  mongo.connect(url, function (err, db) {
  if (err) {
    //console.log('Unable to connect to the mongoDB server. Error:', err);
    throw err;
  } else {
    //console.log('Connection established');
    
    //var col = db.collection('urls');
    
    //col.insert({ orgin:"http://www.google.com", short:"https://www.urlshortner.com/0001", data:{}  },(err,data)=>{
    //   if(err){ throw err; }
    //   console.log("Added to database!");
    //});
    
    //col.removeOne({ orgin:"http://www.google.com"},(err,data)=>{
    //   if(err){ throw err; }
   //    if(data.result.n){ console.log("Removed!"); }
   //    
   // });
    
    //Close connection
    db.close();
  }
});
*/