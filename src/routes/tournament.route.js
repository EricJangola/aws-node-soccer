const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/tournament.controller');

router.route('/:_id')
    .delete(controller.remove, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to delete soccer Tournament'
    });

router.route('/')
    .get(controller.getAll, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to get soccer Tournament'
    });

router.route('/:_id')
    .get(controller.get, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to get soccer Tournament'
    });

router.route('/')
    .post(jsonParser, controller.create, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to post soccer Tournament'
    });

router.route('/:_id/match/:_matchId/detail/start')
    .post(jsonParser, controller.setStart, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to post soccer Tournament'
    });

router.route('/:_id/match/:_matchId/detail/gol')
    .post(jsonParser, controller.setGol, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to post soccer Tournament'
    });

router.route('/:_id/match/:_matchId/detail/interval')
    .post(jsonParser, controller.setInterval, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to post soccer Tournament'
    });

router.route('/:_id/match/:_matchId/detail/overtime')
    .post(jsonParser, controller.setOvertime, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to post soccer Tournament'
    });

router.route('/:_id/match/:_matchId/detail/warning')
    .post(jsonParser, controller.setWarning, () => {
        // #swagger.tags = ['Tournament']
        // #swagger.description = 'Endpoint to post soccer Tournament'
    });

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;