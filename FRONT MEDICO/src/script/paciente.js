document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os toggles na página
    const toggleSections = document.querySelectorAll('.toggle-section');

    // Adiciona um event listener para cada toggle
    toggleSections.forEach(toggle => {
        toggle.addEventListener('click', function () {
            // Seleciona o conteúdo associado ao toggle clicado
            const content = toggle.querySelector('.toggle-content');

            // Verifica se o conteúdo está visível
            if (content.style.display === 'block') {
                // Se estiver visível, recolhe o conteúdo
                content.style.display = 'none';
            } else {
                // Se estiver oculto, expande o conteúdo
                content.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const state1 = document.getElementById('state-1');
    const state2 = document.getElementById('state-2');
    const state3 = document.getElementById('state-3');
    const requestAccessBtn = document.getElementById('request-access-btn');
    const endAccessBtn = document.getElementById('end-access-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    let timer;
    let timeLeft = 14 * 60 + 28; // 14 minutos e 28 segundos em segundos

    // Função para formatar o tempo
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `00 h ${minutes} m ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} s`;
    }

    // Função para iniciar o contador
    function startTimer() {
        timer = setInterval(function () {
            if (timeLeft > 0) {
                timeLeft--;
                document.querySelector('.timer').textContent = formatTime(timeLeft);
                document.querySelector('.progress').style.width = `${(timeLeft / (14 * 60 + 28)) * 100}%`;
            } else {
                clearInterval(timer);
                state2.style.display = 'none';
                state3.style.display = 'block'; // Acesso expirado
            }
        }, 1000);
    }

    // Estado 1: Solicitar Acesso
    requestAccessBtn.addEventListener('click', function () {
        state1.style.display = 'none';
        state2.style.display = 'block';
        startTimer();
    });

    // Estado 2: Encerrar Acesso
    endAccessBtn.addEventListener('click', function () {
        clearInterval(timer);
        state2.style.display = 'none';
        state1.style.display = 'block'; // Volta para o estado 1
        timeLeft = 14 * 60 + 28; // Reseta o tempo
    });

    // Estado 3: Sim ou Não após expiração
    yesBtn.addEventListener('click', function () {
        state3.style.display = 'none';
        state2.style.display = 'block';
        timeLeft = 14 * 60 + 28; // Reseta o tempo
        startTimer();
    });

    noBtn.addEventListener('click', function () {
        state3.style.display = 'none';
        state1.style.display = 'block';
    });
});

// Novo código para o toggle de consulta com os 3 estados

document.addEventListener('DOMContentLoaded', function () {
    const toggleHeader = document.getElementById('toggle-header');
    const toggleList = document.getElementById('toggle-list');
    const toggleContent = document.getElementById('toggle-content');
    const viewConsultBtns = document.querySelectorAll('.btn-view');

    // Estado 1: Abrir e fechar a lista de consultas
    toggleHeader.addEventListener('click', function () {
        if (toggleList.style.display === 'none') {
            toggleList.style.display = 'block';  // Exibir a lista de consultas (Estado 2)
        } else {
            toggleList.style.display = 'none';  // Recolher a lista
            toggleContent.style.display = 'none'; // Esconder o conteúdo expandido
        }
    });

    // Estado 2: Ao clicar no botão "Ver Consulta", abre o conteúdo expandido
    viewConsultBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            toggleContent.style.display = 'block';  // Exibir o conteúdo expandido (Estado 3)
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Botões e elementos do pop-up
    const newConsultBtn = document.getElementById('new-consult-btn');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopup = document.getElementById('close-popup');
    const saveConsult = document.getElementById('save-consult');
    const viewConsultBtn = document.getElementById('view-consult');

    // Abre o pop-up ao clicar em "Nova Consulta"
    newConsultBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'flex';
    });

    // Abre o pop-up ao clicar em "Ver Consulta" no toggle
    viewConsultBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'flex';
    });

    // Fecha o pop-up ao clicar no ícone rosa
    closePopup.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    // Fecha o pop-up ao clicar em "Salvar Consulta"
    saveConsult.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
        // Aqui você pode adicionar a lógica para salvar a consulta
    });
});