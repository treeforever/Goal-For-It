const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')

module.exports = (knex) => {

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
