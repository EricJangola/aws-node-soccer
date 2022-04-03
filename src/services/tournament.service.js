const data = require('../data');
const db = require('../storage/db');

const get =  async function(_id){
    await getById(id);
}

const getAll = async function() {
    return await db.Tournaments.findAll();
}

async function getById(id) {
    const player = await db.Tournaments.findByPk(id);
    if (!player) throw 'Tornament not found';
    return player;
}

async function create(params) {
    // validate
    if (await db.Tournaments.findOne({ where: { name: params.name } })) {
        throw 'Tornament "' + params.name + '" is already registered';
    }

    const pl = new db.Tournaments(params);
    // save user
    await pl.save();
}

module.exports = {
    get,
    getAll,
    create
};