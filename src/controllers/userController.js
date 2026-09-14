const userRepository = require('../repositories/userRepository');

exports.getUsers = (req, res) => {
  try {
    const users = userRepository.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

exports.createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'El nombre y email son obligatorios' });
    }
    const newUser = userRepository.save(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// --- NUEVAS FUNCIONES PARA LOGIN Y REGISTRO ---

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Aquí puedes agregar tu lógica para verificar en la base de datos con Prisma / Neon
    if (!email || !password) {
      return res.status(400).json({ message: 'Correo y contraseña obligatorios' });
    }

    // Ejemplo de respuesta exitosa provisional
    res.json({ message: 'Inicio de sesión exitoso', email });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor al iniciar sesión' });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Aquí puedes agregar tu lógica para guardar el usuario con Prisma / Neon
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor al registrar' });
  }
};