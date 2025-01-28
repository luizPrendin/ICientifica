const mysql = require('mysql');
const fs = require('fs');

// Configurações do banco de dados
const dbConfig = {
  host: 'yaso_digital.mysql.dbaas.com.br',
  user: 'yaso_digital',
  password: 'acD8snt!',
  database: 'yaso_digital'
};

let previousData = null;

// Função para buscar dados da view e atualizar o arquivo JSON se houver alterações
function fetchDataAndUpdateJSON() {
  const connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }

    connection.query('SELECT * FROM vw_super_usuario', (error, results) => {
      if (error) {
        console.error('Erro ao buscar dados da view:', error);
        connection.end();
        return;
      }

      const jsonData = JSON.stringify(results, null, 4);

      // Verifica se os dados mudaram antes de atualizar o arquivo JSON
      if (jsonData !== previousData) {
        fs.writeFile('../data/banco.json', jsonData, 'utf8', (writeErr) => {
          if (writeErr) {
            console.error('Erro ao escrever no arquivo JSON:', writeErr);
          } else {
            console.log('Arquivo JSON atualizado com sucesso');
            previousData = jsonData; // Atualiza os dados anteriores para comparação futura
          }
        });
      } else {
        console.log('Nenhuma alteração detectada no banco de dados.');
      }

      connection.end();
    });
  });
}

// Executa um refresh automático ao iniciar a API
fetchDataAndUpdateJSON();

// Loop para executar a cada 30 segundos
setInterval(fetchDataAndUpdateJSON, 30000);
