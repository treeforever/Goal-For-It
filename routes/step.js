const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')

module.exports = (knex) => {
  router.post('/', jsonParser, (req, res) => {
    console.log("server steps are: ", req.body)
    let newSteps = req.body;
    newSteps.map((s, i) => {
      knex('steps').insert({
        step: s.step,
        checked: false,
        milestone_id: s.milestone_id
      })
      .then(function(result) {
        if(i === newSteps.length - 1) {
          console.log('steps insertion complete.')
          res.json(result)
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
