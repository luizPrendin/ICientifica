// JavaScript for loading patient summary

document.addEventListener('DOMContentLoaded', () => {
    loadPatientSummary();
});

function loadPatientSummary() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('resumo-perfil').textContent = data.perfil.resumoPerfil;
        })
        .catch(error => console.error('Erro ao carregar o resumo do paciente:', error));
}
