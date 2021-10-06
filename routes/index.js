const router = require('express').Router();

const homeRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', homeRoutes);
router.use('/api/workouts', apiRoutes);

module.exports = router;