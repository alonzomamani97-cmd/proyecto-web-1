const mysql = require('mysql2/promise');

// Crear la piscina de conexiones (Pool)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_password',
  database: 'mi_sistema_db',
  waitForConnections: true,
  connectionLimit: 10
});

// Probar la conexión al iniciar
pool.getConnection()
  .then(connection => {
    console.log('✅ Conexión exitosa a la Base de Datos');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Error al conectar a la Base de Datos:', err);
  });

// Exportar para usarlo en las rutas/controladores
module.exports = pool;