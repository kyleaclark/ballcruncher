import { Router } from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';

const rankingSchema = new mongoose.Schema({
  _id: String,
  year: Number,
  week: Number,
  data: Array,
});

const Ranking = mongoose.model('Nfl_Rankings', rankingSchema, 'nfl_rankings');

const router = new Router();

// Matches /api/rankings
router.get('/', (req, res) => {
  const findParams = {};
  const query = req.query || {};

  const dbQuery = Ranking.findOne({ year: query.year, week: query.week }, {});
  mongoose.Promise = Promise;
  dbQuery.exec((err, rankings) => {
    console.log('errrrrrr : ', rankings);
    if (err) {
      return res.send(err);
    }

    res.json([rankings]);
  });
});

router.get('/latest', (req, res) => {
  const sortLatest = { year: -1, week: -1 };

  Ranking.findOne().sort(sortLatest).exec((err, rankings) => {
    if (err) {
      return res.send(err);
    }

    res.json([rankings]);
  });
});

export default router;
