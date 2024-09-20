const express=require("express");
const { registrar, listar, buscar, actualizar, eliminar } = require("../controllers/contactoController");
const router = express.Router();

router.post("/registrar", registrar);
router.get("/listar", listar);
router.get("/buscar/:id", buscar);
router.put("/actualizar/:id", actualizar);
router.delete("/eliminar/:id", eliminar);

module.exports=router;

