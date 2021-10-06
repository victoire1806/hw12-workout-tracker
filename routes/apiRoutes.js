const router = require('express').Router();
const { apiWorkout} = require('../controller');

// GET all workouts
router.get('/', apiWorkout.getWorkouts);

// POST workout
router.post('/', apiWorkout.addWorkout);

// PUT exercise in workout
router.put('/:id', apiWorkout.addWorkoutExercise);

// Get workouts in range
router.get('/range', apiWorkout.getRangeWorkouts);

module.exports = router;