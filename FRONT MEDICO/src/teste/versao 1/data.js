// Escurecer o fundo quando um pop-up for aberto
function escurecerFundo(ativar) {
    const overlay = document.getElementById('overlay');
    if (ativar) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Função para abrir e fechar pop-ups
function abrirPopUpConsulta() {
    const popUp = document.getElementById('pop-up-consulta');
    popUp.style.display = 'block';
    escurecerFundo(true);
}

function fecharPopUpConsulta() {
    const popUp = document.getElementById('pop-up-consulta');
    popUp.style.display = 'none';
    escurecerFundo(false);
}

function abrirPopUpExame() {
    const popUp = document.getElementById('pop-up-exame');
    popUp.style.display = 'block';
    escurecerFundo(true);
}

function fecharPopUpExame() {
    const popUp = document.getElementById('pop-up-exame');
    popUp.style.display = 'none';
    escurecerFundo(false);
}

function abrirPopUpReceita() {
    const popUp = document.getElementById('pop-up-receita');
    popUp.style.display = 'block';
    escurecerFundo(true);
}

function fecharPopUpReceita() {
    const popUp = document.getElementById('pop-up-receita');
    popUp.style.display = 'none';
    escurecerFundo(false);
}

function abrirComprovanteVacina() {
    const popUp = document.getElementById('pop-up-comprovante');
    popUp.style.display = 'block';
    escurecerFundo(true);
}

function fecharPopUpComprovante() {
    const popUp = document.getElementById('pop-up-comprovante');
    popUp.style.display = 'none';
    escurecerFundo(false);
}

// Função para adicionar nova consulta
function abrirPopUpAdicionarConsulta() {
    const popUp = document.getElementById('pop-up-adicionar-consulta');
    popUp.style.display = 'block';
    escurecerFundo(true);
}

function fecharPopUpAdicionarConsulta() {
    const popUp = document.getElementById('pop-up-adicionar-consulta');
    popUp.style.display = 'none';
    escurecerFundo(false);
}

// Função para solicitar acesso
function solicitarAcesso() {
    const botaoReservado = document.querySelector('.botao-reservado');
    botaoReservado.innerHTML = `
        <div class="contador-container">
            <div class="contador-info">
                <h4>Contador de Acesso</h4>
                <progress id="barraProgresso" value="0" max="100"></progress>
                <span id="tempoRestante">15:00</span>
            </div>
            <div class="botao-encerrar">
                <button onclick="encerrarContador()">Encerrar Acesso</button>
            </div>
        </div>
    `;
    iniciarContador();
}

// Função para iniciar o contador de 15 minutos
function iniciarContador() {
    const barraProgresso = document.getElementById('barraProgresso');
    const tempoRestante = document.getElementById('tempoRestante');
    let tempo = 15 * 60; // 15 minutos em segundos

    const intervalo = setInterval(() => {
        tempo--;
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        tempoRestante.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        barraProgresso.value = ((15 * 60 - tempo) / (15 * 60)) * 100;

        if (tempo <= 0) {
            clearInterval(intervalo);
            alert('Tempo de acesso encerrado.');
        }
    }, 1000);
}

// Função para encerrar o contador manualmente
function encerrarContador() {
    alert('Acesso encerrado manualmente.');
    const botaoReservado = document.querySelector('.botao-reservado');
    botaoReservado.innerHTML = '<button onclick="solicitarAcesso()">Solicitar Acesso</button>';
}

// Função para expandir miniaturas de exames
function expandirImagem(src) {
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerHTML = `
        <img src="${src}" alt="Imagem Expandida" style="width: 100%; height: auto;">
        <button onclick="document.body.removeChild(this.parentElement); escurecerFundo(false);">Fechar</button>
    `;
    document.body.appendChild(popUp);
    escurecerFundo(true);
}

// Adicionando eventos aos botões
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON');
            }
            return response.json();
        })
        .then(data => {
            renderProfile(data);
            renderResumo(data);
            renderConsultas(data);
            renderExames(data);
            renderAlergias(data);
            renderMedicamentos(data);
            renderReceitas(data);
            renderVacinas(data);
            renderObservacoes(data);
            renderVacinasAnuais(data);
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));

    document.querySelectorAll('.miniaturas img').forEach(img => {
        img.addEventListener('click', () => expandirImagem(img.src));
    });

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'none';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    function renderProfile(data) {
        const perfilDiv = document.getElementById('perfil-info');
        perfilDiv.innerHTML = `
            <p><strong>Nome:</strong> ${data.perfil.nome} ${data.perfil.sobrenome}</p>
            <p><strong>Número Yaso:</strong> ${data.perfil.numeroYaso}</p>
            <p><strong>Responsável:</strong> ${data.perfil.responsavel.nome} (${data.perfil.responsavel.vinculo})</p>
            <p><strong>Contato:</strong> ${data.perfil.responsavel.contato}</p>
        `;
    }

    function renderResumo(data) {
        const resumoDiv = document.getElementById('resumo-info');
        resumoDiv.innerHTML = `<p>${data.perfil.resumoPerfil}</p>`;
    }

    function renderConsultas(data) {
        const consultasDiv = document.getElementById('consultas-info');
        data.consultas.forEach(consulta => {
            consultasDiv.innerHTML += `
                <div class="linha-consulta">
                    <span><strong>Data:</strong> ${consulta.dataConsulta}</span>
                    <span><strong>Hora:</strong> ${consulta.horaConsulta}</span>
                    <span><strong>Título:</strong> ${consulta.tituloConsulta}</span>
                    <button onclick="abrirPopUpConsulta()">Ver Detalhes</button>
                </div>
            `;
        });
    }

    function renderExames(data) {
        const examesDiv = document.getElementById('exames-info');
        data.exames.forEach(exame => {
            examesDiv.innerHTML += `
                <div class="linha-exame">
                    <span><strong>Data:</strong> ${exame.dataExame}</span>
                    <span><strong>Título:</strong> ${exame.tituloExame}</span>
                    <button onclick="abrirPopUpExame()">Ver Detalhes</button>
                </div>
            `;
        });
    }

    function renderVacinasAnuais(data) {
        const vacinasAnuaisDiv = document.getElementById('vacinas-anuais-info');
        vacinasAnuaisDiv.innerHTML = data.vacinasAnuais.map(vacina => `
            <tr>
                <td>${vacina.nome}</td>
                ${vacina.anos.map(ano => `<td><img src="${ano.status === 'sim' ? 'https://example.com/sim.png' : 'https://example.com/nao.png'}" alt="${ano.status}"></td>`).join('')}
            </tr>
        `).join('');
    }

    function renderObservacoes(data) {
        const observacoesDiv = document.getElementById('observacoes-info');
        observacoesDiv.innerHTML = `<p>${data.observacoes}</p>`;
    }
});
