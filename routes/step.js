const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')

module.exports = (knex) => {
  router.post('/', jsonParser, (req, res) => {
    console.log("server steps are: ", req.body.newMilestones, req.body.goal_id)
    const neSteps = req.body.newMilestones;
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

  router.options('/:step_id', cors())

  router.put('/:step_id', cors(), jsonParser, (req, res) => {
      let selectedStepId = Number(req.params.step_id)
      knex('steps')
        .where('step_id', selectedStepId)
        .update({
          checked: req.body.checked,
          thisKeyIsSkipped: undefined
        })
        .then(function(resp){
          console.log(`Step ${selectedStepId} is ${req.body.checked}`)
          res.json(req.params)
        })
      })
  return router;
};
