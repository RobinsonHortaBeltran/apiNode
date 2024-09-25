const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientsControllers');
const websocketController = require('../controllers/pushController'); // Importa el controlador de WebSocket

//todos los clientes
router.get('/', clientController.getAllClients);

// Ruta para obtener un cliente por ID
router.get('/:id', clientController.getClientById);

// Ruta para crear un nuevo cliente
router.post('/', clientController.createClient);

// Ruta para actualizar un cliente por ID
router.put('/:id', clientController.updateClientById);

// Ruta para eliminar un cliente por ID
router.delete('/:id', clientController.deleteClientById);

router.post('/send-websocket-message', websocketController.sendWebSocketMessage);

module.exports = router;