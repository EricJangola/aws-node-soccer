const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/matchDetail.controller');
// #swagger.tags = ['Match Detail']
router.route('/')
    .get(controller.getAll, () => {
        // #swagger.tags = ['Match Detail']
        // #swagger.description = 'Endpoint to get soccer Match Detail'
    });

router.route('/:_id')
    .get(controller.get, () => {
        // #swagger.tags = ['Match Detail']
        // #swagger.description = 'Endpoint to get soccer Match Detail'
    });

router.route('/')
    .post(jsonParser, controller.create, () => {
        // #swagger.tags = ['Match Detail']
        // #swagger.description = 'Endpoint to post soccer Match Detail'
    });

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;