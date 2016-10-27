import React from 'react'
// import Step from './Step'

const Milestone = ({ milestones }) => {
  return (
    <div>
      {milestones.map((milestone, index) => {
        return (
          <div key={index}>
            <h2>{milestone[0][2]}
               <input
                className="checkbox"
                type="checkbox"
                // onChange={this.props.onChange}
              />
            </h2>
            <Step milestone={milestone} />
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
        return <h3 key={index}>{step[2]}
           <input
            className="checkbox"
            type="checkbox"
            // onChange={this.props.onChange}
          />
        </h3>
        })
      }

    </div>
  );
}

export default Milestone
// milestones = [ [ ["milestone", 1, "read"], [ ['step', 1, "ya"], ['step', 2, 'hey']] ], ...  ]
