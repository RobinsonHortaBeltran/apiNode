const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/index');
const cors = require('cors');

//const db = require('./config/db');
app.use(cors({
    origin: 'http://localhost:4200', // Cambia esto si tu frontend está en otro puerto o dominio
    methods: ['GET', 'POST'], // Especifica los métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Añade otros headers que necesites
}));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', routes);

// Starting the server
const server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

// Exporta el servidor para uso en el controlador si es necesario
module.exports = { server };
