// important file to establish a connection between 
//mongodb server  and node.jsserver
const mongoose = require('mongoose')

// define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/kucukmelek' //kucukmelek is database name 

//connection established 

mongoose.connect(mongoURL, {
  //useNewURLParser : true,
  //useUnifiedTopology : true
})

// mongoose maintains a default conection object representing mongo db coonection

const db = mongoose.connection;

// event listener

db.on('connected',()=>{
console.log("connected to mongodb server ");

});

//db.on('error',(err)=>{
// console.error("connected to mongodb server ", err);

//});

//db.on('diconnected',()=>{
//console.log("disconnected to mongodb server ");

//});


// exports database connection 
module.exports = db;