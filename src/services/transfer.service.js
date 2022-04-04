const data = require('../data');
const db = require('../storage/db');

const get = function(req){
    return;
}

const getAll = async function(){
    const transfers = await db.Transfers.findAll()
    return transfers;
}

async function create(params) {
    // validate
    if (await db.Transfers.findOne({ where: { player: params.player, date: params.date } })) {
        throw 'Transfer "' + params.name + '" is already registered';
    }

    const pl = new db.Transfers(params);
    // save user
    await pl.save();
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