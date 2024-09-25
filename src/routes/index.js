const {Router} = require('express');
const router = Router();
const clientRoutes = require('./clientsRoute');

router.use('/clients', clientRoutes);
module.exports = router;