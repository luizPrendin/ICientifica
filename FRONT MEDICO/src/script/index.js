// TOGGLE ============================================================================================================================

// Seleciona todos os elementos de toggle
const toggles = document.querySelectorAll('.toggle');

// Itera por cada elemento de toggle
toggles.forEach(toggle => {
  // Seleciona o header do toggle (a área que será clicada)
  const header = toggle.querySelector('.toggle-header');

  // Adiciona o evento de clique ao header
  header.addEventListener('click', () => {
    // Verifica se o conteúdo do toggle já está visível
    const content = toggle.querySelector('.toggle-content');
    
    if (content.style.display === 'block') {
      // Se estiver visível, esconde o conteúdo
      content.style.display = 'none';
    } else {
      // Se estiver escondido, mostra o conteúdo
      content.style.display = 'block';
    }
  });
});

// CARROSSEL ============================================================================================================================

// Código do Carrossel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicadores = document.querySelectorAll('.indicador');
    let currentIndex = 0;
    const slideInterval = 5000; // Tempo entre cada slide (5 segundos)
  
    // Função para exibir o slide
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active')); // Esconder todos os slides
      indicadores.forEach(indicador => indicador.classList.remove('ativo')); // Remover a classe 'ativo' dos indicadores
  
      slides[index].classList.add('active'); // Mostrar o slide atual
      indicadores[index].classList.add('ativo'); // Adicionar a classe 'ativo' ao indicador atual
    }
  
    // Função para ir para o próximo slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // Troca de slide a cada 5 segundos
    let slideTimer = setInterval(nextSlide, slideInterval);
  
    // Clique nos indicadores para alternar os slides
    indicadores.forEach((indicador, index) => {
      indicador.addEventListener('click', () => {
        clearInterval(slideTimer); // Parar o intervalo ao clicar
        currentIndex = index;
        showSlide(currentIndex);
        slideTimer = setInterval(nextSlide, slideInterval); // Reiniciar o intervalo após a interação
      });
    });
  
    // Inicializar o carrossel mostrando o primeiro slide
    showSlide(currentIndex);
  });
  
// POP UP DE ENVIO DE DADOS PRO BANCO ============================================================================================================================

  // Intercepta o envio do formulário de newsletter
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-newsletter'); // Seleciona o formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Obtém os dados do formulário
    const formData = new FormData(form);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email')
    };

    // Envia os dados via AJAX usando fetch
    fetch('http://localhost:5000/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // Exibe o pop-up de sucesso
      showSuccessPopup('Registrado com sucesso!');
      // Limpa os campos do formulário após o sucesso
      form.reset();
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
      // Exibe um pop-up de erro (opcional)
      showErrorPopup('Erro ao registrar, tente novamente.');
    });
  });

  // Função para exibir um pop-up de sucesso
  function showSuccessPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = message;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 3000); // Remove o pop-up após 3 segundos
  }

  // Função opcional para exibir um pop-up de erro
  function showErrorPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup error';
    popup.innerText = message;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 3000); // Remove o pop-up após 3 segundos
  }
});