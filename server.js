const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080
const town = require('./models/town')
const user = require('./models/user')
const admin = require('./models/admin')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use('/town', town)
app.use('/user', user)
app.use('/admin', admin)

app.listen(port, () => console.log(`Server listening on port ${port}`));