import React from 'react'

const Step = ({ milestones }) => {
  return (
    <div>
      {milestones.map( milestone => {
        milestone[1].map( step => {
          return <p>{step[2]}</p>
        })
      })}

    </div>
  );
}

export default Step
