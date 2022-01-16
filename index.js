const express = require('express')
const config=require('./config/database');
const app = express()
const port = 3000
const mongoose=require('mongoose');
const path=require('path');
app.use(express.static(__dirname+'/clientSide/dist/client-side'));





mongoose.promise=global.promise;
mongoose.connect(config.uri,(err)=>{
  if(err){
    console.log("can not coneced to database",err);

  }
  else{
   
    console.log("db conected",config.db);
  }
})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/clientSide/dist/client-side/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})