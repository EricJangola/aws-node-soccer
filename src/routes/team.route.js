const express = require('express');
const router = express.Router({ mergeParams: true });
const queue = require("../rabbitMq/queue");

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const teamsController = require('../controllers/team.controller');
router.route('/')
    .get(teamsController.getAll, () => {
        // #swagger.tags = ['Team']
        // #swagger.description = 'Endpoint to get soccer Team' 
    });

router.route('/:_id')
    .delete(teamsController.remove, () => {
        // #swagger.tags = ['Team']
        // #swagger.description = 'Endpoint to delete soccer Team'
    });

/*router.route('/')
    .post(jsonParser, teamsController.create);*/

router.post('/', jsonParser, (req, res) => {
    // #swagger.tags = ['Team']
        // #swagger.description = 'Endpoint to post soccer Team'
    
    queue.sendToQueue("postTeam", req.body);
    res.json({message: 'Your request will be processed!'});
})

router.route('/:_id')
    .get(teamsController.get, () => {
        // #swagger.tags = ['Team']
        // #swagger.description = 'Endpoint to get soccer Team'
    });

module.exports = router;