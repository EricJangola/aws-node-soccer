const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        teamId: { type: DataTypes.STRING, allowNull: false },
        tournamentId: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    
    return sequelize.define('TeamInTournaments', attributes, options);
}

module.exports = model;