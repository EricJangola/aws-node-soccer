const { DataTypes } = require('sequelize');
const Tournament = require('./tournament.model');

function model(sequelize) {
    const attributes = {
        teamOne: { type: DataTypes.STRING, allowNull: false },
        teamTwo: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.STRING, allowNull: false },
        winner: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    

    var match = sequelize.define('Matches', attributes, options),
    tournament = sequelize.define('tournament', Tournament.attributes, Tournament.options);
    match.belongsTo(tournament);
    tournament.hasMany(match);
    return match;
}

module.exports = model;