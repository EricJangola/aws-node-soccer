const data = require('../data');
const db = require('../storage/db');

const get =  async function(_id){
    await getPlayer(id);
}

const getAll = async function(){
    return await db.Players.findAll();
}

async function getPlayer(id) {
    const player = await db.Player.findByPk(id);
    if (!player) throw 'Player not found';
    return player;
}

async function create(params) {
    // validate
    if (await db.Players.findOne({ where: { name: params.name } })) {
        throw 'Player "' + params.name + '" is already registered';
    }

    const pl = new db.Players(params);
    // save user
    await pl.save();
}

module.exports = {
    get,
    getAll,
    create
};