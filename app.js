const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("ola fizitante")
});

app.listen(3001,()=>{
    console.log("App rodando na porta 3001")
});