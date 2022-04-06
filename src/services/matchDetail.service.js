const data = require('../data');
const db = require('../storage/db');
const redis = require('../storage/redis');
const redisKey = "matchDetail";

const get =  async function(id){
    return await getById(id);
}

const getAll = async function() {
    try {
        return await redis.getAllKey(redisKey);
    } catch(err) {
        return await db.MatchDetails.findAll();
    }
}

async function getById(id) {
    const player = await db.MatchDetails.findByPk(id);
    if (!player) throw 'Match not found';
    return player;
}

async function create(params) {
    // validate
    if (await db.MatchDetails.findOne({ where: { matchId: params.matchId } })) {
        throw 'Match Detail"' + params.name + '" is already registered';
    }

    const pl = new db.MatchDetails(params);
    // save user
    await pl.save();
    await redis.setKey(redisKey+pl.matchId, pl);
}

async function remove(id){
    db.MatchDetails.findByPk(id).then(data => {
        if(!data) {
         throw 'Data not found.';
        }
        return db.MatchDetails.destroy({where:{id: id}});
       })
       .catch(err => {
        res.status(500).json({message: 'Deleting match failed.'});
       })
}

module.exports = {
    get,
    getAll,
    create,
    remove
};