const vehiculo = require('../models/Placa');

exports.getAllVehiculo = async (req, res) => {
    try {
        const vehiculos = await vehiculo.findAll();
        res.json(vehiculos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los vehiculos' });
    }
}

exports.getVehiculoById = async (req, res) => {
    try {
        const vehiculo = await vehiculo.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(vehiculo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el vehiculo' });
    }
}

exports.getVehiculoByPlaca = async (req, res) => {
   
    try {
        const vehiculoPorPlaca = await vehiculo.findOne({
            where: {
                placa: req.params.placa 
            },
            logging: console.log
        });

        if (vehiculoPorPlaca) {
            res.json({ error: false, message: 'Vehiculo encontrado', data: vehiculoPorPlaca });
        } else {
            res.status(404).json({ error: true, message: 'No se encontró registro con el número de placa' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: true, message: 'Error interno del servidor',error:error });
    }
};

exports.updateVehiculo = async (req, res) => {
    try {
        const { id } = req.params;
        const { placa, torre, apto, estado, creadoPor } = req.body;

        const [updatedRowsCount] = await vehiculo.update(
            {
                placa,
                torre,
                apto,
                estado,
                creadoPor
            },
            {
                where: { id }  // Condición para actualizar solo el vehiculo con el ID especificado
            }
        );
        if (updatedRowsCount === 0) {
            // Si no se actualizó ninguna fila, significa que no se encontró el vehiculo con ese ID
            return res.status(404).json({ message: 'Vehiculo no encontrado o no actualizado' });
        }
        res.json({ message: 'Vehiculo actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el vehiculo:', error);
        res.status(500).json({ error: 'Error al actualizar el vehiculo' });
    }
}

exports.createVehiculo = async (req, res) => {
    try {
        const { placa, torre, apto, estado, creadoPor } = req.body;
        const newVehiculo = await vehiculo.create({
            placa,
            torre,
            apto,
            estado,
            creadoPor
        });
        res.json(newVehiculo);
    } catch (error) {
        console.error('Error al crear el vehiculo:', error);
        res.status(500).json({ error: 'Error al crear el vehiculo' });
    }
};

exports.deleteVehiculo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRowCount = await vehiculo.destroy({
            where: {
                id
            }
        });
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Vehiculo no encontrado o no eliminado' });
        }
        res.json({ message: 'Vehiculo eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el vehiculo:', error);
        res.status(500).json({ error: 'Error al eliminar el vehiculo' });
    }
}

