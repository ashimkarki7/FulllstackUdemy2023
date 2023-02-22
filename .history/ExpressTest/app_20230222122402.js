const express = require("express");
const app  = express();
const PORT = 8080
// app.listen(PORT,runnerServer(...args));
app.listen(PORT,(...args)=>{
    console.log('changes',args)

    // return JSON.stringify('pres')
});

app.get('/', function (req, res) {
    console.log('req',req,'res',res)
    res
    .status(200)
    .send('GET request to homepagessssssss ')
  })
//json
  app.get('/test', function (req, res) {
    console.log('req',req,'res',res)
    res.json('')
  })
// const runnerServer = (...args)=>{
//     console.log('iamIn',args)
//      res.send('GET request to homepage')

// }
console.log('setver is up')
//to have access to methods