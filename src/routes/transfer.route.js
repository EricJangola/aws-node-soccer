const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const transferController = require('../controllers/transfer.controller');

router.route('/:_id')
    .delete(transferController.remove);

router.route('/')
    .get(transferController.getAll, () => {
        // #swagger.tags = ['Transfer']
        // #swagger.description = 'Endpoint to get soccer Transfer'
    });

router.route('/transfer/:_id')
    .get(transferController.get, () => {
        // #swagger.tags = ['Transfer']
        // #swagger.description = 'Endpoint to get soccer Transfer'
    });

router.route('/')
    .post(jsonParser, transferController.create, () => {
        // #swagger.tags = ['Transfer']
        // #swagger.description = 'Endpoint to post soccer Transfer'
    });

module.exports = router;