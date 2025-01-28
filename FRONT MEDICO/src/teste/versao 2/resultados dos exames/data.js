// JavaScript Completo para a Página de Resultados dos Exames

document.addEventListener('DOMContentLoaded', () => {
    carregarDadosExames();
    adicionarEventos();
});

// Carrega os dados dos exames do arquivo JSON
function carregarDadosExames() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const examList = document.getElementById('exam-list');
            data.resultadoexames.forEach((exame, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${exame.dataExame}</td>
                    <td>${exame.tituloExame}</td>
                    <td><button class="ver-exame" data-index="${index}">Ver Exame</button></td>
                `;
                examList.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao carregar dados dos exames:', error));
}

// Adiciona os eventos de clique necessários
function adicionarEventos() {
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('ver-exame')) {
            const index = event.target.getAttribute('data-index');
            abrirDetalhesExame(index);
        } else if (event.target.classList.contains('close-button')) {
            fecharPopUp(event.target.closest('.pop-up') || event.target.closest('.pop-up-imagem'));
        } else if (event.target.classList.contains('thumbnail')) {
            abrirImagemMaximizada(event.target);
        }
    });
}

// Abre o pop-up de detalhes do exame
function abrirDetalhesExame(index) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const exame = data.resultadoexames[index];
            document.getElementById('exam-title').textContent = exame.tituloExame;
            document.getElementById('exam-date').textContent = exame.dataExame;
            document.getElementById('exam-description').textContent = exame.descricao;
            document.getElementById('exam-doctor-crm-date').innerHTML = `
                <span>${exame.medico}</span> | <span>${exame.CRM}</span> | <span>${exame.dataExame}</span>
            `;
            
            const examImagesContainer = document.getElementById('exam-images');
            examImagesContainer.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const img = document.createElement('img');
                img.src = 'resultado.png';
                img.alt = `Imagem do Exame ${i + 1}`;
                img.classList.add('thumbnail');
                examImagesContainer.appendChild(img);
            }
            abrirPopUp('exam-details-popup');
        })
        .catch(error => console.error('Erro ao carregar detalhes do exame:', error));
}

// Abre o pop-up especificado
function abrirPopUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    if (popUp) {
        popUp.classList.add('open');
        document.getElementById('overlay').classList.add('active');
    }
}

// Fecha o pop-up especificado
function fecharPopUp(popUp) {
    if (popUp) {
        popUp.classList.remove('open');
        document.getElementById('overlay').classList.remove('active');
    }
}

// Abre a imagem maximizada em um novo pop-up
function abrirImagemMaximizada(img) {
    const imagemMaxPopup = document.getElementById('exam-image-popup');
    const imagemMaximizada = document.getElementById('imagem-maximizada');
    
    imagemMaximizada.src = img.src;
    imagemMaximizada.alt = img.alt;
    
    imagemMaxPopup.classList.add('open');
    document.getElementById('overlay').classList.add('active');
}
