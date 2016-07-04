
import { Router } from 'express';
import mongoose from 'mongoose';

let rankingSchema = new mongoose.Schema({
  _id: String,
  data: Array
});

let Ranking = mongoose.model('Nfl_Ranking', rankingSchema, 'nfl_rankings');

let router = new Router();

// Matches /api/rankings
router.get("/", function(req, res) {

  Ranking.find((err, rankings) => {

    if (err) {
      res.send(err);
    }

    res.json(rankings);
  });

});

export default router;
