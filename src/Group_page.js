import React, { Component } from 'react';
import Form from 'react-bootstrap-form';
import Notifications from './Notifications';
import $ from 'jquery';


const attributes = [
    { type: "Text", name: "Notification", required: true, label: "notification" }
];

class Group_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Notifications: [],
      source: "http://localhost:8080/api/notifs"
      }
    }

  componentDidMount() {
    //performs get request to api for goal information
    this.serverRequest = $.get(this.state.source, function(result){
      console.log(result)
    }.bind(this));
  }

   componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="group container">
        <Notifications />
        <Form action="/" method="GET" className="notification-form" attributes={attributes} />
      </div>
    );
  }
}

export default Group_page;
