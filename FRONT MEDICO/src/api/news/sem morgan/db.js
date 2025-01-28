const mysql = require('mysql2');

// Função para criar a conexão com o banco de dados MySQL
function createDbConnection() {
  return mysql.createConnection({
    host: 'yasonews.mysql.dbaas.com.br',
    user: 'yasonews',
    password: 'Marilia23@23',
    database: 'yasonews'
  });
}

module.exports = { createDbConnection };