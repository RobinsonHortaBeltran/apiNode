const express = require('express');
const router = express.Router();
const VehiculoController = require('../controllers/VehiculoController');

// Ruta para obtener todos los vehiculos
router.get('/', VehiculoController.getAllVehiculo);

// Ruta para obtener un vehiculo por ID
router.get('/:id', VehiculoController.getVehiculoById);

// Ruta para obtener un vehiculo por placa
router.get('/placa/:placa', VehiculoController.getVehiculoByPlaca);

// Ruta para actualizar un vehiculo por ID
router.put('/:id', VehiculoController.updateVehiculo);

// Ruta para crear un nuevo vehiculo
router.post('/', VehiculoController.createVehiculo);

module.exports = router;