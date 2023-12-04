const express = require('express');
var parseUrl = require('body-parser')

const app = express();
const port = 8080

let encodeUrl = parseUrl.urlencoded({ extended: false })

app.use(express.static('/'))
app.get('/', (req, res) => {
    //res.status(200).json({name:'name azerty'})
    //res.send('Hello World!')
    res.sendFile(__dirname + '/index.html')
})
app.post('/', encodeUrl, (req, res) => {
    console.log('Form request:', req.body.input)
    res.sendStatus(200)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})