const data = require('../data');
const db = require('../storage/db');
const redis = require('../storage/redis');
const redisKey = "tournament";

const get =  async function(id){
    await getById(id);
}

const getAll = async function() {
    try {
        return await redis.getAllKey(redisKey);
    } catch(err) {
        return await db.Tournaments.findAll();
    }
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
    await redis.setKey(redisKey+pl.name+pl.startDate, pl);
}

async function remove(id){
    db.Tournaments.findByPk(id).then(data => {
        if(!data) {
         throw 'Data not found.';
        }
        return db.Tournaments.destroy({where:{id: id}});
       });
}

module.exports = {
    get,
    getAll,
    create,
    remove
};