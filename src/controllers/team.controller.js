const service = require('../services/team.service');
const queue = require("../rabbitMq/queue");

const get = function(req, res){
    res.send(service.get(req.params._id));
}

/*const getAll = async function(req, res) {
    res.send( await service.getAll());
}*/

const getAll = async function(req, res) {
    res.send(await service.getAll());
}

queue.consume("postTeam", message => {
    //process the message
    const body = convertToBody(message);
    service.create(body)
        .then(() => console.log("processing " + message.content.toString()))
        .catch(err => console.error(err));
});

convertToBody = (message) => { return JSON.parse(message.content); }

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Team created' }))
        .catch(next);
}

const remove = async function(req, res){
    service.remove(req.params._id).then(() => {
        res.status(200).json({message: 'Team deleted'});
       })  
       .catch(err => {
        res.status(500).json({message: 'Deleting team failed.'});
       })
}

module.exports = {
    get,
    getAll,
    create,
    remove
};