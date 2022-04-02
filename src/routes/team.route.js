const express = require('express');
const router = express.Router({ mergeParams: true });

const teamsController = require('../controllers/team.controller');

router.route('/')
    .get(teamsController.getAll);

router.route('/create')
    .post(teamsController.create);

router.route('/:_id')
    .get(teamsController.get);

module.exports = router;