const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/matchDetail.controller');

router.route('/:_id')
    .delete(controller.remove);

router.route('/')
    .get(controller.getAll);

router.route('/:_id')
    .get(controller.get);

router.route('/')
    .post(jsonParser, controller.create);

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;