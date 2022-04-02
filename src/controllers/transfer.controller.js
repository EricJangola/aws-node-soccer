const service = require('../services/transfer.service');

const get = function(req, res){
    res.send(service.get(req));
}

const getAll = async function(req, res){
    res.send( await service.getAll());
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Transer player' }))
        .catch(next);
}

module.exports = {
    get,
    getAll,
    create
};