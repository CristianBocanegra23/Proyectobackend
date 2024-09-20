const express =require("express"
);
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");
const cors = require ("cors");

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());


app.use("/auth",authRoutes);

app.listen(3000,()=> {

    console.log("EL servidor esta por el puerto 3000")
});

