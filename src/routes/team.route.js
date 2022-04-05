const express = require('express');
const router = express.Router({ mergeParams: true });
const queue = require("../rabbitMq/queue");

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const teamsController = require('../controllers/team.controller');

router.route('/:_id')
    .delete(teamsController.remove);

router.route('/')
    .get(teamsController.getAll);

/*router.route('/')
    .post(jsonParser, teamsController.create);*/

router.post('/', jsonParser, (req, res) => {
    queue.sendToQueue("postTeam", req.body);
    res.json({message: 'Your request will be processed!'});
})

router.route('/:_id')
    .get(teamsController.get);

module.exports = router;