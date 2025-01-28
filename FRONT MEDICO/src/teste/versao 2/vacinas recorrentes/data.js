// JavaScript para carregar vacinas recorrentes
document.addEventListener('DOMContentLoaded', () => {
    loadRecurringVaccines();
});

function loadRecurringVaccines() {
    fetch('vacinas.json')
        .then(response => response.json())
        .then(data => {
            const vacinasLista = document.getElementById('vacinas-recorrentes-lista');
            data.vacinasRecorrentes.forEach(vacina => {
                const row = document.createElement('tr');
                let rowContent = `<td>${vacina.nome}</td>`;
                
                vacina.anos.forEach(ano => {
                    rowContent += `
                        <td><img src="${ano.status === 'sim' ? 'sim.png' : 'nao.png'}" alt="${ano.status === 'sim' ? 'Sim' : 'Não'}"></td>
                    `;
                });

                row.innerHTML = rowContent;
                vacinasLista.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao carregar vacinas:', error));
}
