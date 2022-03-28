const service = require('../services/player.service');

const get = function(req, res){
    res.send(service.get(req.params._id))
}

const getAll = function(req, res){
    res.send(service.getAll())
}

module.exports = {
    get,
    getAll
};