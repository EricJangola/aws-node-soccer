const data = require('../data');
const db = require('../storage/db');
const redisKey = "match";

const get =  async function(id){
    await getById(id);
}

const getAll = async function() {
    try {
        return await redis.getAllKey(redisKey);
    } catch(err) {
        return await db.Matches.findAll();
    }
}

async function getById(id) {
    db.Matches.findByPk(id).then(data => {
        if(!data) {
         throw 'Data not found';
        }
        return data;
       });
}

async function create(params) {
    // validate
    if (await db.Matches.findOne({ where: { date: params.date, winner: params.winner, tournamentId: params.tournamentId } })) {
        throw 'Match "' + params.name + '" is already registered';
    }

    const pl = new db.Matches(params);
    // save user
    await pl.save();
    await redis.setKey(redisKey+pl.teamOne+pl.teamTwo+pl.date, pl);
}

async function remove(id){
    db.Matches.findByPk(id).then(data => {
        if(!data) {
         throw 'Data not found.';
        }
        return db.Matches.destroy({where:{id: id}});
       });
}

module.exports = {
    get,
    getAll,
    create,
    remove
};