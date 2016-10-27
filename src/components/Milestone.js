import React from 'react'
// import Step from './Step'

const Milestone = ({ milestones }) => {
  return (
    <div>
      {milestones.map((milestone, index) => {
        return (
          <div>
            <h2>{milestone[0][2]}</h2>
            <Step key={index}
                  milestone={milestone}
            />
          </div>
        )
      })}

    </div>
  );
}

const Step = ({ milestone }) => {
  return (
    <div>
      {milestone[1].map((step, index) => {
        return <h3 key={index}>{step[2]}</h3>
        })
      }

    </div>
  );
}

export default Milestone
// milestones = [ [ ["milestone", 1, "read"], [ ['step', 1, "ya"], ['step', 2, 'hey']] ], ...  ]
