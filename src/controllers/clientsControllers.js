const Client = require('../models/Clients');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los clientes'});
    }
}

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el cliente'});
    }
}

exports.updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, name, last_name, id_type, identification_number, cellphone, address, email, status } = req.body;
        
        const [updatedRowsCount] = await Client.update(
            {
                type,
                name,
                last_name,
                id_type,
                identification_number,
                cellphone,
                address,
                email,
                status
            },
            {
                where: { id }  // Condición para actualizar solo el cliente con el ID especificado
            }
        );
        if (updatedRowsCount === 0) {
            // Si no se actualizó ninguna fila, significa que no se encontró el cliente con ese ID
            return res.status(404).json({ message: 'Cliente no encontrado o no actualizado' });
        }
        res.json({ message: 'Cliente actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
}

exports.createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        res.status(201).json(newClient);
    } catch (err) {
        console.error('Error al crear el cliente:', err);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

exports.updateClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Client.update(req.body, { where: { id } });
        if (updated) {
            res.json({ message: 'Cliente actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Cliente no encontrado o no actualizado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

exports.deleteClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Client.destroy({ where: { id } });
        if (deleted) {
            res.json({ message: 'Cliente eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};