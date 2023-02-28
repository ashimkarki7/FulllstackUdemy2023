const express = require("express");
const app  = express();
const PORT = 8080
// app.listen(PORT,runnerServer(...args));
app.listen(PORT,(...args)=>{
    console.log('changes',args)

    // return JSON.stringify('pres')
});
 
//whenever your hit a route like this home home route it will log the url
app.get('/', function (req, res) {
  
    // console.log('req1',req,'res1',res)
    res?.status(200)?.send('GET request to homepagessssssss ')
  })
//this is placed at top has acess to upper get function else only has access to function below it and not the upper one 
  app.use((req,res,next)=>{ 
    console.log('reqmethod',req?.method,'requrl',res.url)
    // console.log('req',req,'res',res)
    next()

 });
//json
  app.get('/test', function (req, res) {
    // console.log('req2',req,'res2',res)
    res.status(200).json({"me":'json me',"you":"you json"})
  });
// const runnerServer = (...args)=>{
//     console.log('iamIn',args)
//      res.send('GET request to homepage')

// }
console.log('setver is up')
//to have access to methods