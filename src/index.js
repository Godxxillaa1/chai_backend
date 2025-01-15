// require('dotenv').config({path: './env'})

import express from "express";
import  connectDB  from "./db/index.js";
import {app} from "./app.js"


// const app = express()
connectDB()
.then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
            
        })
    }
)
.catch((err) => {
    console.log(`Mongo DB Connection Faild: ${err} `)
})

// JUST FOR TESTING PERPOSES
// app.post('/api/resource', (req, res) => {
//     res.send('Route works!');
// });



 