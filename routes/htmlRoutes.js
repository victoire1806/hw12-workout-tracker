const router = require("express").Router();
const workout = require("../public/workout");

router.get("/api/workouts/", (req, res) => {
    workout.find({}).then(workout => {
        console.log("workout : " + workout);
        res.json(workout);
      }).catch(err => {
        res.json(err);
      });
  });