const express = require('express');
const { createDbConnection } = require('./db'); // Importando o arquivo db.js
const router = express.Router();

router.post('/news', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  const db = createDbConnection();

  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
    }

    const query = 'INSERT INTO News (nome, email) VALUES (?, ?)';

    db.query(query, [nome, email], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados no banco de dados:', err);
        return res.status(500).json({ error: 'Erro ao salvar os dados' });
      }

      db.end((err) => {
        if (err) {
          console.error('Erro ao fechar a conexão:', err);
        }
        res.status(201).json({ message: 'Dados inseridos com sucesso!' });
      });
    });
  });
});

module.exports = router;