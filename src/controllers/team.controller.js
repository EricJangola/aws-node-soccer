const service = require('../services/team.service');

const get = function(req, res){
    res.send(service.get(req.params._id));
}

const getAll = async function(req, res){
    res.send( await service.getAll());
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Team created' }))
        .catch(next);
}

module.exports = {
    get,
    getAll,
    create
};