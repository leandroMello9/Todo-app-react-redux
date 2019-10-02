const express = require('express')
const server = express()
const port = 3003
const bodyParser = require('body-parser')
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())
server.use(allowCors)
server.listen(port,console.log('Servidor rodando na porta 3003'))

module.exports = server