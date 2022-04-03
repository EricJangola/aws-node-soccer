const data = require('../data');
const db = require('../storage/db');

const get =  async function(_id){
    await getById(id);
}

const getAll = async function() {
    return await db.Matches.findAll();
}

async function getById(id) {
    const player = await db.Matches.findByPk(id);
    if (!player) throw 'Match not found';
    return player;
}

async function create(params) {
    // validate
    if (await db.Matches.findOne({ where: { name: params.name } })) {
        throw 'Match Detail"' + params.name + '" is already registered';
    }

    const pl = new db.Matches(params);
    // save user
    await pl.save();
}

module.exports = {
    get,
    getAll,
    create
};