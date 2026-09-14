const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1. Controlador para el Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Correo y contraseña obligatorios' });
    }

    // Buscar en la base de datos de Neon usando Prisma si el usuario existe
    const user = await prisma.user.findUnique({
      where: { email }
    });

    // Validar si el usuario no existe o la contraseña no coincide
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales incorrectas o usuario no registrado' });
    }

    // Si todo es correcto, permitimos el acceso
    res.status(200).json({ 
      message: '¡Inicio de sesión exitoso!', 
      user: { name: user.name, email: user.email } 
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno en el servidor' });
  }
};

// 2. Controlador para obtener el perfil (usado por conexion.js y el dashboard)
exports.getProfile = async (req, res) => {
  try {
    // Trae al último usuario registrado/logueado de prueba
    const users = await prisma.user.findMany({
      take: 1,
      orderBy: { id: 'desc' } 
    });

    if (users.length > 0) {
      res.json(users[0]);
    } else {
      res.status(404).json({ message: 'No hay sesión activa' });
    }
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({ message: 'Error al obtener perfil' });
  }
};