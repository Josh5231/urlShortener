var express = require("express");
var router = express.Router();
var urlCheck = require("../mods/urlCheck.js").urlCheck;
var coreLoc = __dirname.substr(0,__dirname.length-7);
var mongo = require("mongodb").MongoClient;
var url = process.env.MONGOLAB_URI;

router.get("/",(req,res)=>{
    res.sendFile("index.html",{root: coreLoc+"/html/" });
});


router.get("/new/*",(req,res)=>{
    var addr = req.originalUrl.substr(5);
    console.log(addr);
   //Step 1: verify good address
   if( urlCheck(addr) )
     {
      //Step 2: Check if address is already in DB
      mongo.connect(url, function (err, db) 
      {
        if (err) { throw err; }
        var col = db.collection("urls");
        var output = { original_url:addr, short_url:"https://mins.herokuapp.com/", lookup:0 }; //setup data
        col.find().count((err,cnt)=>{
           if(err){ throw err; }
           output.short_url+=cnt;
           output.lookup=cnt;
           col.insert(output,(err,data)=>
            { //Add data to DB
                if(err){ throw err; }
                res.send(output); //Send shortened url to res
            });
        db.close();
        });
     });
         
     }
    else
     {
         res.send("Error: Invalid address");
     }
});

router.get("/:urlID",(req,res)=>{
   
   mongo.connect(url, function (err, db) 
      {
        if(err){ throw err; }
        var col = db.collection("urls");

        col.find({ lookup:+req.params.urlID },{ original_url:1,short_url:1 }).toArray((err,docs)=>{
        if(err){ throw err; }
        if(docs[0]==undefined){ res.send("Invalid URL"); }
        else{ res.redirect(docs[0].original_url); }
        });
        db.close();
      });
});


module.exports = router;