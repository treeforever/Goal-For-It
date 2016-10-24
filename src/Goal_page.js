import React, { Component } from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';

import { fetchGoal } from "./actions/goalActions"
import Milestones from './Milestones';
import _ from 'underscore';


class Goal_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: {
        title: '',
        milestones: []
      },
      source: "http://localhost:8080/api/goal"
    }
  }

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

  renderGoals = (goals) => {
   return (
     <ul>
       <li> {goals[0]} </li>
     </ul>
   )
  }


  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGoal();
  }


  render() {
    return (
      <div className="goal-page">
        <h1>{}</h1>
        <Milestones className="milestones" Milestones={this.props.Goals.goals}/>
        <h2>Just Goal 1's milestone</h2>
        <h3>Redux doesn't like it{this.props.goalArray} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Goals: state.goals
  }
}

export default connect(mapStateToProps, { fetchGoal })(Goal_page);
