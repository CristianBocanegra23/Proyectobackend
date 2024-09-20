const bcrypt = require("bcrypt");
const pool = require("../config/db");

exports.registrar = async (req, res) => {
  const { nombre, apellido, correoelectronico, mensaje } = req.body;
  const sql =
    "INSERT INTO contacto (nombre, apellido, correoelectronico, mensaje) VALUES ($1, $2 , $3, $4)";

  try {
    const respuesta = await pool.query(sql, [
      nombre,
      apellido,
      correoelectronico,
      mensaje,
    ]);
    res.status(200).json({ message: "El contacto ha sido registrado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al registrar el contacto" });
  }
};

exports.listar = async (req, res) => {
  const sql = "SELECT * FROM contacto";
  try {
    const resultado = await pool.query(sql);
    return res.status(200).json(resultado.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "No se pudo hacer la lista de contactos" });
  }
};

exports.buscar = async (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM contacto WHERE id = $1";
  try {
    const resultado = await pool.query(sql, [id]);
    if (resultado.rows == 0) {
      return res.status(200).json({ mensaje: "No encontre nada" });
    }
    return res.status(200).json(resultado.rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "No se pudo hacer la lista de contactos" });
  }
};

exports.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correoelectronico, mensaje } = req.body;
  const sql =
    "UPDATE contacto  SET nombre = $1, apellido = $2, correoelectronico = $3, mensaje = $4 WHERE id = $5";

  try {
    const resultado = await pool.query(sql, [
      nombre,
      apellido,
      correoelectronico,
      mensaje,
      id,
    ]);
    return res.status(200).json({ mensaje: "Listo, actualizado" });

    return res.status(200).json(resultado.rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "No se pudo hacer la actualizacion del contacto" });
  }
};

exports.eliminar = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM contacto WHERE id = $1";
  try {
    const resultado = await pool.query(sql, [id]);
    return res.status(200).json({mensaje: 'Listo eliminado'});
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "No se pudo hacer eliminar el contacto" });
  }
};