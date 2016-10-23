import React, { Component } from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';

import { fetchGoal } from "./actions/goalActions"
import Milestone from './Milestone';


class Goal_page extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     goal: {
  //       title: '',
  //       milestones: []
  //     },
  //     source: "http://localhost:8080/api/goal"
  //   }
  // }

  // componentDidMount() {
  //   //performs get request to api for goal information
  //   this.serverRequest = $.get(this.state.source, function(result){
  //     //sets state of page with goal title
  //     this.state.goal.title = result[0].goal;
  //     for(var i = 0; i < result.length; i++){
  //       //pushes all milestones and milestone_id into state
  //       this.state.goal.milestones.push(result[i])
  //     }
  //     this.setState(this.state)
  //   }.bind(this));
  // }

  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGoal();
  }

  render() {
    console.log("this.props is", this.props)
    return (
      <div>
        <h1>{this.props.goals}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("state in map is", state)
  return {
    goals: state.goals.goals
  }
}

export default connect(mapStateToProps, { fetchGoal })(Goal_page);
