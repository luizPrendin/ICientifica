const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// Habilitar CORS para permitir requisições do front-end
app.use(cors());
// Middleware para logar todas as requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json({ limit: '50mb' })); // Para aceitar grandes quantidades de dados em base64

// Criar um pool de conexões com o banco de dados MySQL
const pool = mysql.createPool({
  host: 'yaso_digital.mysql.dbaas.com.br',
  user: 'yaso_digital',
  password: 'acD8snt!',
  database: 'yaso_digital',
  waitForConnections: true,
  connectionLimit: 10, // Número máximo de conexões no pool
  queueLimit: 0        // Sem limite de consultas na fila
});

// Verifica se a pool está conectando corretamente
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar no pool do banco de dados: ', err);
  } else {
    console.log('Conectado ao MySQL através do pool de conexões');
    connection.release(); // Libera a conexão após o teste
  }
});

// Rota para salvar o exame
app.post('/upload-exame', (req, res) => {
  const { nome_exame, tipo_exame, medico_exame, descricao_exame, file, super_id_usuario } = req.body;

  if (!file) {
    return res.status(400).json({ error: 'Imagem não enviada' });
  }

  // Query para inserir os dados no banco de dados
  const query = `INSERT INTO yaso_exame (nome_exame, tipo_exame, medico_exame, descricao_exame, file, super_id_usuario) 
                 VALUES (?, ?, ?, ?, ?, ?)`;

  // Converter a imagem base64 para o formato binário adequado para o MySQL
  const imageBuffer = Buffer.from(file, 'base64');

  // Usar o pool de conexões para realizar a consulta
  pool.query(query, [nome_exame, tipo_exame, medico_exame, descricao_exame, imageBuffer, super_id_usuario], (error, results) => {
    if (error) {
      console.error('Erro ao salvar no banco de dados: ', error);
      return res.status(500).json({ error: 'Erro ao salvar no banco de dados' });
    }
    res.json({ message: 'Exame salvo com sucesso!', id: results.insertId });
  });
});

// Rota para listar todos os exames
app.get('/exames', (req, res) => {
  pool.query('SELECT * FROM yaso_exame', (error, results) => {
    if (error) {
      console.error('Erro ao consultar o banco de dados: ', error);
      return res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
    }
    res.json(results);
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
