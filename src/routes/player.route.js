const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const playerController = require('../controllers/player.controller');

router.route('/:_id')
    .delete(playerController.remove);

router.route('/')
    .get(playerController.getAll);

router.route('/:_id')
    .get(playerController.get);

router.route('/')
    .post(jsonParser, playerController.create);

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;