const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const playerController = require('../controllers/player.controller');

router.route('/:_id')
    .delete(playerController.remove);

router.route('/')
    .get(playerController.getAll, () => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Endpoint to get soccer Player'
    });

router.route('/:_id')
    .get(playerController.get, () => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Endpoint to get soccer Player'
    });

router.route('/')
    .post(jsonParser, playerController.create, () => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Endpoint to post soccer Player'
    });

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;