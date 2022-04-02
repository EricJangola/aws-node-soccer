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

module.exports = {
    get,
    getAll
};