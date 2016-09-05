import { Router } from 'express'
import mongoose from 'mongoose'

let rankingSchema = new mongoose.Schema({
  _id: String,
  year: Number,
  position: String,
  data: Array
})

let Ranking = mongoose.model('Fantasy_Football_Rankings', rankingSchema, 'fantasy_football_rankings')

let router = new Router()

// Matches /api/fantasy-football-rankings
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
