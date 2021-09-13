const { application } = require('express');
const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

const PORT = process.env.PORT || 8877;

server.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})

server.get('/', (req,res) => {
    return res.json({usuario: 'Rodrigo'})
})

server.get('/filmes', (req,res) => {
    return res.json({filmes})
})