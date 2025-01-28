const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Importando cors
const app = express();
const PORT = 4051;

// Middleware CORS
const corsOptions = {
  origin: '*', // Permite todas as origens
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Configuração do pool de conexões ao banco de dados
const db = mysql.createPool({
  host: 'yaso_digital.mysql.dbaas.com.br',
  user: 'yaso_digital',
  password: 'acD8snt!',
  database: 'yaso_digital',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware para parsear JSON
app.use(express.json());

// Rota de login
app.post('/login', (req, res) => {
  const { USUARIO, senha } = req.body;

  if (!USUARIO || !senha) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
  }

  const query = 'SELECT * FROM medico WHERE USUARIO = ? AND SENHA = ?';
  db.query(query, [USUARIO.trim(), senha.trim()], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      return res.status(500).json({ error: 'Erro no servidor ao consultar banco de dados', details: err.message });
    }

    if (results.length > 0) {
      console.log(`Usuário "${USUARIO}" logado com sucesso`);
      const user = results[0];
      res.status(200).json({
        message: 'Login bem-sucedido',
        usuario: {
          nomeSocial: user.NOME_SOCIAL,
          idCustomizado: user.ID_CUSTOMIZADO,
          fotoPerfil: user.FOTO_PERFIL
        }
      });
    } else {
      console.log(`Tentativa de login falhou para USUARIO: "${USUARIO}"`);
      res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
