import React from 'react'
import MuiText from "./MuiText"


const Step = () => {
  return (
    <article className="step">
        <img src="../../images/footprints.png" alt="steps" height="35" width="40"/>
          <MuiText
            className="step-input"
            hintText={this.props.stepInputs.hintText}
            floatingLabelText={this.props.stepInputs.floatingLabelText}
            onSave={this.props.onSave}
          />

    </article>
  );
}

export default Step
