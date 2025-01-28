// server.js
const express = require('express');
const cors = require('cors');
const app = require('./app'); // Importando o app.js

const server = express();

// Middleware para habilitar CORS
server.use(cors());

// Iniciando o servidor na porta 5000
server.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});

server.use(express.json()); // Para processar JSON
server.use(express.urlencoded({ extended: true })); // Para processar dados do formulário

// Usando o app para gerenciar as rotas
server.use('/api', app);