import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroup, fetchNotifs } from "./actions/groupActions"

// import Form from 'react-bootstrap-form';
import NotificationList from './NotificationList';
import GroupList from './GroupList';
import $ from 'jquery';


const attributes = [
    { type: "Text", name: "Notification", required: true, label: "notification" }
];

class Group_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: [{name: ''}],
      notifs: [{
          content: '', notice_id: ''
        }]
      }
    }

  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGroup();
    this.props.fetchNotifs();
  }

  componentWillReceiveProps(nextProps) {
    this.state.group = nextProps.group;
    this.state.notifs = nextProps.notifs;
    this.setState(this.state)
  }

  render() {
    console.log('hellooo', this.props.group)

    return (
      <div className="group">
        <GroupList grouplist={this.state.group} />
        <h1>{this.state.group[0].name }</h1>
        <NotificationList notifs={this.state.notifs}/>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    group: state.group.group,
    notifs: state.group.notifs
  }
}

export default connect(mapStateToProps, {
  fetchGroup,
  fetchNotifs
   })(Group_page);
