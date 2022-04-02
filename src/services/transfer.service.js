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
    /*if (await db.Transfers.findOne({ where: { name: params.name } })) {
        throw 'Transfer "' + params.name + '" is already registered';
    }*/

    const pl = new db.Transfers(params);
    // save user
    await pl.save();
}

module.exports = {
    get,
    getAll,
    create
};