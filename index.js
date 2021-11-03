const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', '?????')
app.set('views', path.join(__dirname))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, ()=>{
  console.log("Serving on PORT 3000")
})

 