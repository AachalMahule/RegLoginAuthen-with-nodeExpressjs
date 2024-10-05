//Routing
//const express =require('express')
import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

//DATABASE CONNECTION
connectDB(DATABASE_URL)

//SET TEMPLATE ENGINE
app.set('view engine', 'ejs')

//middleware
app.use(express.urlencoded({ extended: true }));

//LOAD ROUTE
app.use('/', web)



app.listen(port, () => {
    console.log(`Server listing at http://localhost:${port}`)
})