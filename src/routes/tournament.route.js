const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/tournament.controller');

router.route('/')
    .get(controller.getAll);

router.route('/:_id')
    .get(controller.get);

router.route('/')
    .post(jsonParser, controller.create);

router.route('/:_id/match/:_matchId/detail/start')
    .post(jsonParser, controller.setStart);

router.route('/:_id/match/:_matchId/detail/gol')
    .post(jsonParser, controller.setGol);

router.route('/:_id/match/:_matchId/detail/interval')
    .post(jsonParser, controller.setInterval);

router.route('/:_id/match/:_matchId/detail/overtime')
    .post(jsonParser, controller.setOvertime);

router.route('/:_id/match/:_matchId/detail/warning')
    .post(jsonParser, controller.setWarning);

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;