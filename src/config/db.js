require('dotenv').config();

const { Client } = require('pg');
const client = new Client({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
});

client.connect()
.then(() => {
console.log('Conexión exitosa a PostgreSQL');

})

.catch((err) => {
    console.error('Error al conectar a PostgreSQL:', err);
});