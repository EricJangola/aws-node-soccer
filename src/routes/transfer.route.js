const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const transferController = require('../controllers/transfer.controller');

router.route('/')
    .get(transferController.getAll);

router.route('/transfer/:_id')
    .get(transferController.get);

router.route('/')
    .post(jsonParser, transferController.create);

module.exports = router;