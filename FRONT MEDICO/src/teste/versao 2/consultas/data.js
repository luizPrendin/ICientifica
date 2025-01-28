// JavaScript para a página de "Últimas Consultas"

document.addEventListener('DOMContentLoaded', () => {
    carregarConsultas();
    adicionarEventos();
});

function carregarConsultas() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const listaConsultas = document.getElementById('lista-consultas');
            data.consultas.forEach((consulta, index) => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${consulta.dataConsulta}</td>
                    <td>${consulta.tituloConsulta}</td>
                    <td><button class="ver-consulta" data-id="${index}">Ver Consulta</button></td>
                `;
                listaConsultas.appendChild(linha);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados das consultas:', error));
}

function adicionarEventos() {
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('ver-consulta')) {
            const consultaId = event.target.getAttribute('data-id');
            abrirDetalhesConsulta(consultaId);
        } else if (event.target.classList.contains('fechar-botao')) {
            fecharPopUpConsulta();
        } else if (event.target.classList.contains('overlay')) {
            fecharPopUpConsulta();
        }
    });
}

function abrirDetalhesConsulta(consultaId) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const consulta = data.consultas[consultaId];
            if (consulta) {
                document.getElementById('titulo-consulta').textContent = consulta.tituloConsulta;
                document.getElementById('data-consulta').textContent = consulta.dataConsulta;
                document.getElementById('descricao-consulta').textContent = consulta.descricao;
                document.getElementById('medico-crm-data').textContent = `${consulta.medico} | ${consulta.CRM}`;
                abrirPopUpConsulta('detalhes-consulta-popup');
            }
        })
        .catch(error => console.error('Erro ao carregar os detalhes da consulta:', error));
}

function abrirPopUpConsulta(popUpId) {
    const popUp = document.getElementById(popUpId);
    const overlay = document.getElementById('overlay-consulta');
    if (popUp) {
        popUp.classList.add('open');
        overlay.classList.add('active');
    }
}

function fecharPopUpConsulta() {
    const popUp = document.querySelector('.popup-consulta.open');
    const overlay = document.getElementById('overlay-consulta');
    if (popUp) {
        popUp.classList.remove('open');
        overlay.classList.remove('active');
    }
}
