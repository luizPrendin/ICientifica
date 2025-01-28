// Variável para armazenar as features carregadas do JSON
let features = [];

// Função para carregar o JSON contendo as features
fetch('../data/features.json')
  .then(response => response.json())
  .then(data => {
    features = data.features; // Armazena as features na variável
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));

// Monitorar o campo de busca para detectar quando a tecla "Enter" é pressionada
document.querySelector('.search-bar').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
    const query = e.target.value.toLowerCase(); // Normaliza a entrada para minúsculas
    
    // Busca pela feature correspondente no JSON
    const feature = features.find(f => f.keywords.includes(query)); // Busca por palavras-chave
    
    if (feature) {
      showPopup(feature.title, feature.subtitle, feature.summary, feature.benefits, feature.link); // Exibe o pop-up se a feature for encontrada
    } else {
      alert('Nenhuma feature encontrada para o termo buscado.'); // Caso nenhuma feature seja encontrada
    }
  }
});

// Função para exibir o pop-up com título, subtítulo, resumo e benefícios
function showPopup(title, subtitle, summary, benefits, link = '#') {
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-subtitle').textContent = subtitle;
  document.getElementById('popup-summary').textContent = summary;
  document.getElementById('popup-benefits').textContent = benefits;
  document.getElementById('popup-link').setAttribute('href', link); // Define o link "Saiba mais..."
  document.getElementById('feature-popup').classList.remove('hidden'); // Exibe o pop-up
}

// Função para fechar o pop-up
function closePopup() {
  document.getElementById('feature-popup').classList.add('hidden'); // Esconde o pop-up
}

// Garante que o evento de fechar seja vinculado corretamente após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.close-button').addEventListener('click', closePopup);
});
