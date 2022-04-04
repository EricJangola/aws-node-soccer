const service = require('../services/match.service');

const get = async function(req, res){
    res.send( await service.get(req.params._id));
}

const getAll = async function(req, res){
    res.send( await service.getAll());
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Match created' }))
        .catch(next);
}

const remove = async function(req, res){
    service.remove(req.params._id).then(() => {
        res.status(200).json({message: 'Match deleted'});
       })  
       .catch(err => {
        res.status(500).json({message: 'Deleting match failed.'});
       })
}

module.exports = {
    get,
    getAll,
    create,
    remove
};