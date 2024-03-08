'use strict'


/* -------------------------------------------------------------------------- */
/*                               BOOK ASSIGNMENT                              */
/* -------------------------------------------------------------------------- */

const express=require('express')
const cors=require('cors')

const app=express()

require('dotenv').config();
const PORT=process.env.PORT || 8000;
app.use(cors({
    origin: 'http://localhost:3000'
}))
require ('express-async-errors')

app.use(express.json())
app.use(require('./app/routes/book.router'))
app.use(require('./app/errorHandler'))




app.listen(PORT, ()=> console.log('runned : http://127.0.0.1:' +PORT))