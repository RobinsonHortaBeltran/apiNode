const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cellphone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true  // Valida que el formato sea un correo electrónico válido
        }
    },
    status: {
        type: DataTypes.BOOLEAN,  // Asumimos que 'status' es un valor booleano (1 = activo, 0 = inactivo)
        defaultValue: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'clients', // Nombre de la tabla
    timestamps: false      // Desactiva los timestamps automáticos (porque ya tenemos created_at y updated_at)
});

module.exports = Client;