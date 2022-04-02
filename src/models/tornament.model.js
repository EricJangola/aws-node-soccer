const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        rounds: { type: DataTypes.STRING, allowNull: false },
        endDate: { type: DataTypes.STRING, allowNull: false },
        startDate: { type: DataTypes.STRING, allowNull: false },
        winner: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    
    return sequelize.define('Tournaments', attributes, options);
}

module.exports = model;