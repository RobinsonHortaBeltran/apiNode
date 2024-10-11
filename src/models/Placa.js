const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vehiculo = sequelize.define('Vehiculo', {
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    torre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apto: {
        type: DataTypes.STRING,
        allowNull: false
    },estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    creadoPor: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false
         }
},{
    tableName: 'vehiculos', // Nombre de la tabla
    timestamps: false      // Desactiva los timestamps automáticos (porque ya tenemos created_at y updated_at)
});

module.exports = Vehiculo;