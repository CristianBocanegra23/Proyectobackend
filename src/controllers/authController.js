

const bcrypt = require('bcrypt');
const conexion = require('../config/db');

exports.registrar = (req, res) => {
  const { nombre, username, password } = req.body;
  const encriptada = bcrypt.hashSync(password, 8);
  const sql = "INSERT INTO usuario (nombre, username, password) VALUES (?, ?, ?)";
  
  conexion.query(sql, [nombre, username, encriptada], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al registrar el usuario' });
    }
    res.status(200).json({ message: 'El usuario ha sido registrado' });
  });
};