const express = require('express');
const router = express.Router({ mergeParams: true });

const playerController = require('../controllers/player.controller');

router.route('/')
    .get(playerController.getAll);

router.route('/:_id')
    .get(playerController.get);

//router.use('/:Account_id', accountsCarsRoute);

module.exports = router;