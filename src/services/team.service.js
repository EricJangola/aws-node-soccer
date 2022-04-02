const data = require('../data');
const db = require('../storage/db');

const get = function(_id){
    return;
}

const getAll = async function(){
    return await db.Teams.findAll();
}

async function create(params) {
    // validate
    if (await db.Teams.findOne({ where: { name: params.name } })) {
        throw 'Team "' + params.name + '" is already registered';
    }

    const team = new db.Teams(params);
    // save user
    await team.save();
}

module.exports = {
    get,
    getAll,
    create
};