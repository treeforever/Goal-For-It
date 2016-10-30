const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')

module.exports = (knex) => {
  router.post('/', jsonParser, (req, res) => {
    console.log("server milestones are: ", req.body.newMilestones, req.body.goal_id)
    const newMilestones = req.body.newMilestones;
    let newMilestonesId = []
    newMilestones.map((m, i) => {
      knex('milestones').insert({
        mile_title: m,
        mile_description: '',
        checked: false,
        goal_id: req.body.goal_id
      })
      .returning('milestone_id')
      .then(function(result) {
        newMilestonesId.push(result[0])
        console.log('Milestones insertion complete.', newMilestonesId)
        if(i === newMilestones.length - 1) {
          res.json({id: newMilestonesId})
        }
      })
      .catch(function(err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
    })

  })


  router.options('/:mile_id', cors())

  router.put('/:mile_id', cors(), jsonParser, (req, res) => {
      let selectedMileId = Number(req.params.mile_id)
      knex('milestones')
        .where('milestone_id', selectedMileId)
        .update({
          checked: req.body.checked,
          thisKeyIsSkipped: undefined
        })
        .then(function(resp){
          console.log(`Milestone ${selectedMileId} is ${req.body.cbecked}`)
          res.json(req.params)
        })
      })


  return router;
};
