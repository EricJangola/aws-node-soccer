const service = require('../services/player.service');

const get = function(req, res){
    res.send(service.get(req.params._id))
}

const getAll = function(req, res){
    res.send(service.getAll())
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Player created' }))
        .catch(next);
}

module.exports = {
    get,
    getAll,
    create
};