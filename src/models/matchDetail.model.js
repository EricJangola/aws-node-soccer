const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        matchId: { type: DataTypes.STRING, allowNull: false },
        start: { type: DataTypes.STRING, allowNull: true },
        interval: { type: DataTypes.STRING, allowNull: true },
        gol: { type: DataTypes.STRING, allowNull: true },
        overtime: { type: DataTypes.STRING, allowNull: true },
        replacements: { type: DataTypes.STRING, allowNull: true },
        warnings: { type: DataTypes.STRING, allowNull: true },
        end: { type: DataTypes.STRING, allowNull: true }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    
    return sequelize.define('MatchDetail', attributes, options);
}

module.exports = model;