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
    // this.state = {
    //     group: props.group,
    //     notifs: props.notifs,
    //   };
    }

  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGroup();
    this.props.fetchNotifs();
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps', nextProps)
  //   this.state.group = nextProps.group;
  //   this.state.notifs = nextProps.notifs;
  //   this.setState(this.state)
  // }

  render() {
    // console.log('hellooo', this.state.group)

    return (
      <div className="group">
        <GroupList group={this.props.group} />
        <h1>{this.props.group[0].name }</h1>
        <NotificationList notifs={this.props.notifs}/>
      }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    group: store.group.group,
    notifs: store.group.notifs
  }
}

export default connect(mapStateToProps, {
  fetchGroup,
  fetchNotifs
   })(Group_page);


