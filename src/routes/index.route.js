const express = require('express');
const player = require('./player.route');
const team = require('./team.route');
const transfer = require('./transfer.route');
const swagger = require('./swagger.route');

const router = express.Router();

router.use('/team', team);
router.use('/transfer', transfer);
router.use('/player', player);
router.use('/', swagger);

router.get('/', (req, res) => res.send('Sample Node API Version1'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;