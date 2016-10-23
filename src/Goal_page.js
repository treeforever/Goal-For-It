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
  //     var array = $.map(result, function(value, index) {
  //       return [value];
  //     });
  //     console.log(array)

  //     //sets state of page with goal title
  //     this.state.goal.title = array[0][0].goal;
  //     for(var i = 0; i < array.length; i++){
  //       //pushes all milestones and milestone_id into state
  //       this.state.goal.milestones.push(array[0][0]);
  //     }
  //     this.setState(this.state);
  //   }.bind(this));
  // }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGoal();
  }


  render() {
    return (
      <div>
        <h1>Just Goal 1 {this.props.goals.goal}</h1>
        <h2>Just Goal 1's milestone</h2>
        <h3>Redux doesn't like it{this.props.goalArray} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goals,
    goalArray: state.goals.goalArray
  }
}

export default connect(mapStateToProps, { fetchGoal })(Goal_page);
