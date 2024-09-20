const express =require("express"
);
const dotenv = require("dotenv");
const contactoRoutes = require("./src/routes/contactoRoutes");
const cors = require ("cors");

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());


app.use("/contacto",contactoRoutes);


app.listen(3000,()=> {

    console.log("EL servidor esta por el puerto 3000")
});

