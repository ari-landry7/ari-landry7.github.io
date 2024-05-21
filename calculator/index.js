const express = require('express')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

const calculatorRoutes = require('./routes/calculatorRoutes')

app.use('/', express.static('public'))
app.use('/calculator', calculatorRoutes)

app.listen(PORT, ()=>{
    console.log(`Example app listening at http://localhost:${PORT}`)
})