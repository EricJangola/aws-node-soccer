const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        teamOne: { type: DataTypes.STRING, allowNull: false },
        teamTwo: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.STRING, allowNull: false },
        winner: { type: DataTypes.STRING, allowNull: false },
        tournamentId: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    
    return sequelize.define('Matches', attributes, options);
}

module.exports = model;