const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')

module.exports = (knex) => {

  router.options('/:mile_id', cors())

  router.put('/:mile_id', cors(), jsonParser, (req, res) => {
      console.log(req.body, req.params)
      let selectedMileId = Number(req.params.mile_id)
      knex('milestones')
        .where('milestone_id', selectedMileId)
        .update({
          checked: req.body.checked,
          thisKeyIsSkipped: undefined
        })
        .then(function(resp){
          console.log(`Milestone ${selectedMileId} completed`)
          res.json(req.params)
        })
      })
  return router;
};

