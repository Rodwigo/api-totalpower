const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/usuario', (req,res) => {
    return res.json({usuario: 'Rodrigo'})
})

server.get('/testando', (req,res) => {
    return res.json({filmes})
})

server.listen(3000, () => {
    console.log("Sucesso!")
});