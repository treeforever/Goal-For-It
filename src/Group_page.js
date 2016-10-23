import React, { Component } from 'react';
// import Form from 'react-bootstrap-form';
import Notifications from './Notifications';
import $ from 'jquery';


// const attributes = [
//     { type: "Text", name: "Notification", required: true, label: "notification" }
// ];

class Group_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupMembers: [],
      groupDescription:'',
      Notifications: [],
      source1: "http://localhost:8080/api/notifs",
      source2: "http://localhost:8080/api/group"
      }
    }

  componentDidMount() {
    //performs get request to api for goal information
    this.serverRequest = $.get(this.state.source1, function(results){
      this.state.Notifications.push(results)
      console.log(results)
      this.setState(this.state)
    }.bind(this));
  }

   componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="group">
        <Notifications Notifs={this.state.Notifications}/>
        {/*<Form action="/" method="GET" className="notification-form" attributes={attributes} />*/}
      </div>
    );
  }
}

export default Group_page;
