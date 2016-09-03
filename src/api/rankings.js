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

  if (query.year) {
    let year = parseInt(req.query.year)

    findParams.year = year
  }

  Ranking.find(findParams, (err, rankings) => {
    if (err) {
      res.send(err)
    }

    res.json(rankings)
  })

})

export default router
