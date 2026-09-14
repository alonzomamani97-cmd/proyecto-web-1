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