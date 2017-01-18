import { Router } from 'express'
import mongoose from 'mongoose'

let rankingSchema = new mongoose.Schema({
  _id: String,
  year: Number,
  week: Number,
  data: Array
})

let Ranking = mongoose.model('Nfl_Rankings', rankingSchema, 'nfl_rankings')

let router = new Router()

// Matches /api/rankings
router.get("/", function(req, res) {
  let findParams = {}
  let query = req.query || {}

  Ranking.findOne({year : query.year, week: query.week}, {}).exec((err, rankings) =>  {
    console.log('errrrrrr : ', rankings)
    if (err) {
      res.send(err)
    }

    res.json([rankings])
  })

})

router.get("/latest", function(req, res) {
  var sortLatest = {year : -1, week: -1}

  Ranking.findOne().sort(sortLatest).exec((err, rankings) =>  {
    if (err) {
      res.send(err)
    }

    res.json([rankings])
  })
})

export default router
