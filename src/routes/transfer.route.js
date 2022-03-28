const express = require('express');
const router = express.Router({ mergeParams: true });

const transferController = require('../controllers/transfer.controller');

router.route('/transfer')
    .get(transferController.getAll);

router.route('/transfer/:_id')
    .get(transferController.get);


module.exports = router;