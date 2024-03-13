import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/post',(req,res)=> {
    
})

app.listen(3000);
