document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const USUARIO = document.getElementById('USUARIO').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const errorPopup = document.getElementById('error-popup');

  // Verificar se campos estão vazios
  if (!USUARIO || !senha) {
    errorPopup.style.display = 'block';
    errorPopup.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  try {
    const response = await fetch('http://localhost:4051/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ USUARIO: USUARIO, senha: senha })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login bem-sucedido:', data);
    
      // Armazenar dados do usuário no localStorage
      localStorage.setItem('medico_nome', data.usuario.nomeSocial);
      localStorage.setItem('medico_yaso', data.usuario.idCustomizado);
      localStorage.setItem('medico_foto', data.usuario.fotoPerfil);
    
      // Redirecionar para a página de perfil
      window.location.href = 'perfil.html';
    }
     else {
      const errorData = await response.json();
      errorPopup.style.display = 'block';
      errorPopup.textContent = errorData.error || 'Erro desconhecido ao fazer login.';
    }
  } catch (error) {
    console.error('Erro ao conectar à API:', error);
    errorPopup.style.display = 'block';
    errorPopup.textContent = 'Erro ao conectar à API. Verifique sua conexão com a internet.';
  }
});
