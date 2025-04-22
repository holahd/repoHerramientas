const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//app.use(express.json()); 
app.get('/ping',(req, res) => {
    res.status(200).json(
      {
        message: 'pong'
      }
    )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
