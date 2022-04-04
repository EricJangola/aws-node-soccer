const data = require('../data');
const db = require('../storage/db');

const get =  async function(id){
    await getById(id);
}

const getAll = async function() {
    return await db.Matches.findAll();
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
    if (await db.Matches.findOne({ where: { name: params.name } })) {
        throw 'Match "' + params.name + '" is already registered';
    }

    const pl = new db.Matches(params);
    // save user
    await pl.save();
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