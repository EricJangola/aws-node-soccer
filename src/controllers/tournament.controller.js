const service = require('../services/tournament.service');
const matchDetailservice = require('../services/matchDetail.service');

const get = function(req, res){
    res.send(service.get(req.params._id));
}

const getAll = async function(req, res){
    res.send( await service.getAll());
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json({ message: 'Tournament created' }))
        .catch(next);
}

const setStart = async (req, res, next) => {
    if(!req.body.start) throw 'Invalid resource';
    const matchDetail = await findMatchDetail(req.params._matchId);
    if (!matchDetail) throw 'Match not found';
    matchDetail.setStart(req.body.start);
    matchDetail.save();

    return res.json({ message: 'Match Detail updated' });
}

async function setGol(req, res, next) {
    
    if(!req.body.gol) throw 'Invalid resource';
    const matchDetail = await findMatchDetail(req.params._matchId);
    if (!matchDetail) throw 'Match not found';

    matchDetail.setGol(req.body.gol);
    matchDetail.save();
    
    return res.json({ message: 'Match Detail updated' });
}

async function setInterval(req, res, next) {
    if(!req.body.interval) throw 'Invalid resource';
    const matchDetail = await findMatchDetail(req.params._matchId);
    if (!matchDetail) throw 'Match not found';

    matchDetail.setInterval(req.body.interval);
    matchDetail.save();
    
    return res.json({ message: 'Match Detail updated' });
}

async function setOvertime(req, res, next) {
    if(!req.body.overtime) throw 'Invalid resource';
    const matchDetail = await findMatchDetail(req.params._matchId);
    if (!matchDetail) throw 'Match not found';

    matchDetail.setOvertime(req.body.overtime);
    matchDetail.save();
    
    return res.json({ message: 'Match Detail updated' });
}

async function setWarning(req, res, next) {
    if(!req.body.warning) throw 'Invalid resource';
    const matchDetail = await findMatchDetail(req.params._matchId);
    if (!matchDetail) throw 'Match not found';

    matchDetail.setWarning(req.body.warning);
    matchDetail.save();
    
    return res.json({ message: 'Match Detail updated' });
}

const findMatchDetail = async (matchId) => {
    return await matchDetailservice.get(matchId);
}

module.exports = {
    get,
    getAll,
    create,
    setStart,
    setGol, 
    setInterval,
    setOvertime,
    setWarning
};