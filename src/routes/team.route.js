const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const teamsController = require('../controllers/team.controller');

router.route('/:_id')
    .delete(teamsController.remove);

router.route('/')
    .get(teamsController.getAll);

router.route('/')
    .post(jsonParser, teamsController.create);

router.route('/:_id')
    .get(teamsController.get);

module.exports = router;