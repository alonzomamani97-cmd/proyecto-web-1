document.addEventListener('DOMContentLoaded', async () => {
  const navUsername = document.getElementById('nav-username');
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');
  const logoutBtn = document.getElementById('logout-btn');

  // 1. CARGAR DATOS DEL USUARIO LOGUEADO
  try {
    const response = await fetch('/api/users/profile');

    if (response.ok) {
      const user = await response.json();
      
      // Mostrar datos en pantalla
      navUsername.textContent = user.name || user.email;
      profileName.textContent = user.name || 'Sin nombre';
      profileEmail.textContent = user.email;
    } else {
      // Si no hay sesión válida, redirigir al Login
      window.location.href = '/login.html';
    }
  } catch (error) {
    console.error('Error al verificar sesión:', error);
    window.location.href = '/login.html';
  }

  // 2. BOTÓN DE CERRAR SESIÓN
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        await fetch('/api/users/logout', { method: 'POST' });
        window.location.href = '//public/login.html';
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        window.location.href = '//public/login.html';
      }
    });
  }
});