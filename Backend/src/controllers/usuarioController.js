const dbConnection = require('../config/dbConfig');

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM Usuarios');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

exports.login = async (req, res) => {
  const { correo, contrasena } = req.body;
  console.log('Datos recibidos:', correo, contrasena);
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM Usuarios WHERE correo = ? AND contrasena = ?', [correo, contrasena]);
    connection.release();
    if (rows.length > 0) {
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

