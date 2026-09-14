document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // --- FORMULARIO DE LOGIN ---
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert('¡Inicio de sesión exitoso!');
          window.location.href = '/index.html';
        } else {
          alert(data.message || 'Error al iniciar sesión.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión con el servidor.');
      }
    });
  }

  // --- FORMULARIO DE REGISTRO ---
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;

      try {
        const response = await fetch('/api/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert('¡Registro exitoso! Redirigiendo al inicio de sesión...');
          window.location.href = '/conexion.html';
        } else {
          alert(data.message || 'Error al registrar usuario.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión con el servidor.');
      }
    });
  }
});


