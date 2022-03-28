const service = require('../services/transfer.service');

const get = function(req, res){
    res.send(service.get(req));
}

const getAll = function(req, res){
    res.send(service.getAll(req));
}

module.exports = {
    get,
    getAll
};