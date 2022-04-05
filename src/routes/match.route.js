const express = require('express');
const router = express.Router({ mergeParams: true });

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

const controller = require('../controllers/match.controller');
const { route } = require('express/lib/application');

router.route('/:_id')
    .delete(controller.remove, () => {
        // #swagger.tags = ['Match']
        // #swagger.description = 'Endpoint to delete soccer match' 
    });

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