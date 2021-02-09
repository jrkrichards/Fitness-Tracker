// Setting up variables
const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();

// Requiring model to query database
const db = require("../model/fitness");

// Setting up seed data
let workoutSeed = [
    {
      day: new Date().setDate(new Date().getDate()-10),
      exercises: [
        {
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-9),
      exercises: [
        {
          type: "resistance",
          name: "Lateral Pull",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-8),
      exercises: [
        {
          type: "resistance",
          name: "Push Press",
          duration: 25,
          weight: 185,
          reps: 8,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-7),
      exercises: [
        {
          type: "cardio",
          name: "Running",
          duration: 25,
          distance: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-6),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 285,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-5),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 4)),
      exercises: [
        {
          type: "resistance",
          name: "Quad Press",
          duration: 30,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 3)),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 2)),
      exercises: [
        {
          type: "resistance",
          name: "Military Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    }
  ];
  
//   db.deleteMany({})
//     .then(() => db.collection.insertMany(workoutSeed))
//     .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });

router.get('/api/workouts', (req, res) => {
    db.find({}, (error, data) => {
        if(error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.find({}, (error, data) => {
        if(error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
});

router.put('/api/workouts/:id', (req, res) => {
    db.collection.findOneAndUpdate(
    {
    _id: mongojs.ObjectId(req.params.id)
    },
    {
        $push: {
            exercises: req.body
    }
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    });
});

router.post('/api/workouts', (req, res) => {
    db.collection.insertOne({
        day: new Date().setDate(new Date().getDate()),
        exercises: [req.body]
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;