// Setting up variables
const express = require("express");
const mongojs = require("mongojs");
const seed = require("../seeders/seed")
const router = express.Router();

// Requiring model to query database
const db = require("../model/fitness");
const seedDb = {
    async checkDb() {
        const itemResult = await db.find({}).exec();
        if(itemResult.length === 0) {
            console.log("empty database")
            db.deleteMany({})
                .then(() => db.collection.insertMany(seed))
                .then(data => {
                    console.log(data.result.n + " records inserted!");
                })
                .catch(err => {
                console.error(err);
                });
        } else {
            console.log("database has entries")
        }
    }
}
seedDb.checkDb()

router.get('/api/workouts', (req, res) => {
    db.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }], (error, data) => {
        if(error) {
            res.send(error)
        } else {
            res.json(data)
        }
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        },
        {
            $sort: {
                _id: -1
            }
        },
        { 
            $limit: 7
        },
        {
            $sort: {
                _id: 1
            }
        },
        ], (error, data) => {
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
        day: new Date(new Date().setDate(new Date().getDate())),
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