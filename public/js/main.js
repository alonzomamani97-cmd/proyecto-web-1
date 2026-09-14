document.addEventListener('DOMContentLoaded', async () => {
  const logoutBtn = document.getElementById('logout-btn');
  const navUsername = document.getElementById('nav-username');
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');

  // 1. OBTENER INFORMACIÓN DEL USUARIO AUTENTICADO
  try {
    const response = await fetch('/api/users/profile'); // Ajusta a tu endpoint de perfil
    
    if (response.ok) {
      const user = await response.json();
      
      // Insertar datos en el HTML
      if (navUsername) navUsername.textContent = user.name || user.email;
      if (profileName) profileName.textContent = user.name || 'Sin nombre';
      if (profileEmail) profileEmail.textContent = user.email;
    } else {
      // Si la sesión no es válida, redirigir al Login
      window.location.href = '/login.html';
    }
  } catch (error) {
    console.error('Error al cargar perfil:', error);
    window.location.href = '/login.html';
  }

  // 2. FUNCIONALIDAD DEL BOTÓN CERRAR SESIÓN
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        await fetch('/api/users/logout', { method: 'POST' });
        window.location.href = '/login.html';
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        window.location.href = '/login.html';
      }
    });
  }
});