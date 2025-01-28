document.addEventListener("DOMContentLoaded", function() {
    const nome = localStorage.getItem('medico_nome');
    const yaso = localStorage.getItem('medico_yaso');
    const foto = localStorage.getItem('medico_foto');

    if (nome) {
        document.getElementById('medico-nome').textContent = nome;
    }
    if (yaso) {
        document.getElementById('medico-yaso').textContent = yaso;
    }
    if (foto) {
        document.getElementById('medico-foto').src = foto;
    }
});
