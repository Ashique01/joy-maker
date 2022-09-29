const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
const mediRoute = require('./routes/mediRoute')
const userRoute = require("./routes/userRoute")
const billRoute = require("./routes/billRoute")


app.use('/api/medicines/', mediRoute)
app.use('/api/users/', userRoute)
app.use('/api/bills/', billRoute)


const port = 5000;


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`server running at  ${port}!`))