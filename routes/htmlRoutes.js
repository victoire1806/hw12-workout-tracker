
const router = require('express').Router();
const { htmlController } = require('../controller');

// Homepage
router.get('/', htmlController.viewHomePage);

// Exercise page
router.get('/exercise', htmlController.viewExercisePage);

// Stats page
router.get('/stats', htmlController.viewStatsPage);

module.exports = router;