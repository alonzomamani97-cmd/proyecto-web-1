const User = require('../models/userModel');

// Simulación de base de datos en memoria por ahora
let usersDb = [
  new User(1, 'Juan Pérez', 'juan@example.com'),
  new User(2, 'Maria López', 'maria@example.com')
];

class UserRepository {
  findAll() {
    return usersDb;
  }

  save(name, email) {
    const newId = usersDb.length > 0 ? usersDb[usersDb.length - 1].id + 1 : 1;
    const newUser = new User(newId, name, email);
    usersDb.push(newUser);
    return newUser;
  }
}

module.exports = new UserRepository();