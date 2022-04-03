const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        matchId: { type: DataTypes.STRING, allowNull: false },
        start: { type: DataTypes.STRING, allowNull: false },
        interval: { type: DataTypes.STRING, allowNull: false },
        overtime: { type: DataTypes.STRING, allowNull: false },
        replacements: { type: DataTypes.STRING, allowNull: false },
        warnings: { type: DataTypes.STRING, allowNull: false },
        end: { type: DataTypes.STRING, allowNull: false }
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