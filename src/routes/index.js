const {Router} = require('express');
const router = Router();
const clientRoutes = require('./clientsRoute');
const vehiculoRoutes = require('./vehiculosRoute');

router.use('/vehiculos', vehiculoRoutes);
router.use('/clients', clientRoutes);
module.exports = router;