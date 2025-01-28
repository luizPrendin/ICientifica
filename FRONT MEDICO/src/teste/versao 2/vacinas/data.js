// JavaScript para a página de "Comprovantes de Vacinação"

document.addEventListener('DOMContentLoaded', () => {
    carregarComprovantesVacinas();
    adicionarEventosVacinas();
});

function carregarComprovantesVacinas() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const listaVacinas = document.getElementById('vacinas-lista');
            data.vacinasStatus.forEach((vacina, index) => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${vacina.dataAplicacao}</td>
                    <td>${vacina.nomeVacina}</td>
                    <td><button class="ver-vacina" data-id="${index}">Ver Comprovante</button></td>
                `;
                listaVacinas.appendChild(linha);
            });
        })
        .catch(error => console.error('Erro ao carregar os comprovantes de vacinação:', error));
}

function adicionarEventosVacinas() {
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('ver-vacina')) {
            const vacinaId = event.target.getAttribute('data-id');
            abrirDetalhesVacina(vacinaId);
        } else if (event.target.id === 'fechar-vacina' || event.target.classList.contains('overlay')) {
            fecharPopUpVacina();
        }
    });
}

function abrirDetalhesVacina(vacinaId) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const vacina = data.vacinasStatus[vacinaId];
            if (vacina) {
                document.getElementById('nome-vacina').textContent = vacina.nomeVacina;
                document.getElementById('data-vacina').textContent = vacina.dataAplicacao;
                document.getElementById('comprovante-vacina').src = 'vacina.png';
                abrirPopUpVacina('popup-vacina');
            }
        })
        .catch(error => console.error('Erro ao carregar os detalhes do comprovante de vacinação:', error));
}

function abrirPopUpVacina(popUpId) {
    const popUp = document.getElementById(popUpId);
    const overlay = document.getElementById('overlay');
    if (popUp) {
        popUp.classList.add('open');
        overlay.classList.add('active');
    }
}

function fecharPopUpVacina() {
    const popUp = document.querySelector('.popup-vacina.open');
    const overlay = document.getElementById('overlay');
    if (popUp) {
        popUp.classList.remove('open');
        overlay.classList.remove('active');
    }
}
