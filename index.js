require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require("cors")
const port = process.env.PORT
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/v1',routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})