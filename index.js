const dotenv = require("dotenv").config()
const express = require('express')
const cors = require("cors")


const app = express()
const port = process.env.POTY || 9000

app.use(cors())
app.use(express.json())

app.use("*/api/*",(_,res)=>{
    res.json({data:'The API Lives'})
})

app.listen(port, ()=>{
    console.log(`Server is alive on port ${port}`)
});














// console.log("its alive");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// //.USER on mac!!!
// console.log(process.env.PORT);
