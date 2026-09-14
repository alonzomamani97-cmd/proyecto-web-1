document.addEventListener('DOMContentLoaded', async () => {
    const card = document.getElementById('connection-card');
    const title = document.getElementById('status-title');
    const desc = document.getElementById('status-desc');

    try {
        // Petición segura al backend para validar el perfil/sesión en la base de datos
        const response = await fetch('/api/users/profile');
        
        if (response.ok) {
            // Activamos el estado de verificación exitosa en el CSS
            card.classList.add('verified');
            title.textContent = '¡Conexión verificada!';
            desc.textContent = 'Acceso autorizado. Redirigiendo al panel...';

            // Esperamos 1.2 segundos para que se alcance a ver la animación antes de entrar al index
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 1200);
        } else {
            alert('Sesión no autorizada o expirada.');
            window.location.href = '/login.html';
        }
    } catch (error) {
        console.error('Error de conexión:', error);
        alert('Error de conexión con el servidor.');
        window.location.href = '/login.html';
    }
});