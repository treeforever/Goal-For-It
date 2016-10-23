import React, { Component } from 'react';
import Milestone from './Milestone';
import $ from 'jquery';


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

  componentDidMount() {
    //performs get request to api for goal information
    this.serverRequest = $.get(this.state.source, function(result){
      var array = $.map(result, function(value, index) {
        return [value];
      });
      console.log(array)

      //sets state of page with goal title
      this.state.goal.title = array[0][0].goal;
      for(var i = 0; i < array.length; i++){
        //pushes all milestones and milestone_id into state
        this.state.goal.milestones.push(array[0][0]);
      }
      this.setState(this.state);
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <h1>{this.state.goal.title}</h1>
        <Milestone ListOfMilestones={this.state.goal.milestones} />
      </div>
    );
  }
}

export default Goal_page;
