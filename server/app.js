const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()
const router = express.Router()
let url =  "mongodb://kir:kir@cluster0-shard-00-00-enlml.mongodb.net:27017,cluster0-shard-00-01-enlml.mongodb.net:27017,cluster0-shard-00-02-enlml.mongodb.net:27017/kostikova?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
     url = "mongodb://kir:kir@cluster0-shard-00-00-enlml.mongodb.net:27017,cluster0-shard-00-01-enlml.mongodb.net:27017,cluster0-shard-00-02-enlml.mongodb.net:27017/kostikova?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
try {
  mongoose.connect(url, (error, db) => {
    routes(app, db)
  })
  console.log('connect')
} catch (error) {
  console.log('error')
}

let port = 5000 || process.env.PORT

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
//app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

//app.use('/api', router)

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
