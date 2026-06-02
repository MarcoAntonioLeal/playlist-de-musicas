const express = require('express')

const app = express()

app.use(express.json())

const router = require('./routes')
app.use(router)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})