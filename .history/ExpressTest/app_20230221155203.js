const express = require("express");
const app  = express();
const PORT = 8080
// app.listen(PORT,runnerServer(...args));
app.listen(PORT,()=>{
    console.log('changes')
});

const runnerServer = (...args)=>{
    console.log('iamIn',args)

}
console.log('setver is up')
//to have access to methods