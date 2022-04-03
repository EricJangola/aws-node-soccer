const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/match.controller');

router.route('/')
    .get(controller.getAll);

router.route('/:_id')
    .get(controller.get);

router.route('/')
    .post(jsonParser, controller.create);

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;