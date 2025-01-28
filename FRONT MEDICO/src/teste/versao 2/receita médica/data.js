// JavaScript para a página de "Receitas Médicas"

document.addEventListener('DOMContentLoaded', () => {
    carregarReceitasMedicas();
    adicionarEventos();
});

function carregarReceitasMedicas() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const listaReceitas = document.getElementById('receitas-lista');
            data.receitasMedicas.forEach((receita, index) => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${receita.dataReceita}</td>
                    <td>${receita.tituloReceita}</td>
                    <td><button class="ver-receita" data-id="${index}">Ver Receita</button></td>
                `;
                listaReceitas.appendChild(linha);
            });
        })
        .catch(error => console.error('Erro ao carregar as receitas médicas:', error));
}

function adicionarEventos() {
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('ver-receita')) {
            const receitaId = event.target.getAttribute('data-id');
            abrirDetalhesReceita(receitaId);
        } else if (event.target.id === 'fechar-receita' || event.target.classList.contains('overlay')) {
            fecharPopUpReceita();
        }
    });
}

function abrirDetalhesReceita(receitaId) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const receita = data.receitasMedicas[receitaId];
            if (receita) {
                document.getElementById('titulo-receita').textContent = receita.tituloReceita;
                document.getElementById('data-receita').textContent = receita.dataReceita;
                document.getElementById('descricao-receita').textContent = receita.descricaoReceita;
                document.getElementById('medico-crm-data').textContent = `${receita.medico} | CRM: ${receita.CRM}`;
                abrirPopUpReceita('popup-receita');
            }
        })
        .catch(error => console.error('Erro ao carregar os detalhes da receita médica:', error));
}

function abrirPopUpReceita(popUpId) {
    const popUp = document.getElementById(popUpId);
    const overlay = document.getElementById('overlay');
    if (popUp) {
        popUp.classList.add('open');
        overlay.classList.add('active');
    }
}

function fecharPopUpReceita() {
    const popUp = document.querySelector('.popup-receita.open');
    const overlay = document.getElementById('overlay');
    if (popUp) {
        popUp.classList.remove('open');
        overlay.classList.remove('active');
    }
}
