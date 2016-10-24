import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from "./actions/userActions"

import Form from 'react-bootstrap-form';
import NotificationList from './NotificationList';
import $ from 'jquery';


const attributes = [
    { type: "Text", name: "Notification", required: true, label: "notification" }
];

class Group_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: [{name: ''}]
      }
    }

  // componentDidMount() {
  //   //performs get request to api for goal information
  //   this.serverRequest = $.get(this.state.source1, function(results){
  //     this.state.Notifications.push(results)
  //     console.log(results)
  //     this.setState(this.state)
  //   }.bind(this));
  // }

  //  componentWillUnmount() {
  //   this.serverRequest.abort();
  // }



  renderGroupMembers = (group) => {
   return (
     <ul>

       {group.map((member, index) => {
       return <li key={index}>{index + 1}. {member.username} </li>
     })}
     </ul>
   )
  }

  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGroup();
  }

  componentWillReceiveProps(nextProps) {
    this.state.group = nextProps.Group;
    this.setState(this.state)
  }

  render() {
    return (
      <div className="group">
        <h2>Group Members: {this.renderGroupMembers(this.props.Group)} </h2>
        <h1>{this.state.group[0].name }</h1>
        <NotificationList />
        {//<Form action="/" method="POST" className="notification-form" attributes={attributes} />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Group: state.user.group
  }
}

export default connect(mapStateToProps, { fetchGroup })(Group_page);
