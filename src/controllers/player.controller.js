const service = require('../services/player.service');

const get = function(req, res){
    res.send(service.get(req.params._id))
}

const getAll = async function(req, res){
    res.send( await service.getAll());
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Player created' }))
        .catch(next);
}

const remove = async function(req, res){
    service.remove(req.params._id).then(() => {
        res.status(200).json({message: 'Player deleted'});
       })  
       .catch(err => {
        res.status(500).json({message: 'Deleting player failed.'});
       })
}

module.exports = {
    get,
    getAll,
    create,
    remove
};