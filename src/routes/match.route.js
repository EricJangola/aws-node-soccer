const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/match.controller');
router.route('/')
    .get(controller.getAll, () => {
        // #swagger.tags = ['Match']
        // #swagger.description = 'Endpoint to get soccer match' 
    });

router.route('/:_id')
    .get(controller.get, () => {
        // #swagger.tags = ['Match']
        // #swagger.description = 'Endpoint to get soccer match' 
    });

router.route('/')
    .post(jsonParser, controller.create, () => {
        // #swagger.tags = ['Match']
        // #swagger.description = 'Endpoint to post soccer match' 
    });

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;