const data = require('../data');
const db = require('../storage/db');
const redis = require('../storage/redis');
const redisKey = "transfer";

const get = function(req){
    return;
}

const getAll = async function(){
    try {
        return await redis.getAllKey(redisKey);
    } catch(err) {
        return await db.Transfers.findAll()
    }
}

async function create(params) {
    const pl = new db.Transfers(params);
    // save user
    await pl.save();
    await redis.setKey(redisKey+pl.Player+pl.date, pl);
}

async function remove(id){
    db.Transfers.findByPk(id).then(data => {
        if(!data) {
         throw 'Data not found.';
        }
        return db.Transfers.destroy({where:{id: id}});
       });
}

module.exports = {
    get,
    getAll,
    create,
    remove
};