const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.Players = require('../models/player.model')(sequelize);
    db.Teams = require('../models/team.model')(sequelize);
    db.Transfers = require('../models/transfer.model')(sequelize);
    db.Matches = require('../models/match.model')(sequelize);
    db.MatchDetails = require('../models/matchDetail.model')(sequelize);
    db.Tournaments = require('../models/tournament.model')(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
}