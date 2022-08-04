const express = require('express')
const server = express()

const wordsRouter = require('./words/words-router')

server.use(express.json())
server.use('/api/words',wordsRouter)



module.exports = server