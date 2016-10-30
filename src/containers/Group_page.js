import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGroup, fetchNotifs, addNotif, fetchUser } from "./actions/groupActions"

import NotificationList from './NotificationList'
import GroupList from './GroupList'
import InputBox from './components/InputBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'
import AppBar from 'material-ui/AppBar';



class Group_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: []
    }
  }

  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
  }

   handleSave = text => {
    console.log(this.props.tag[0])
      this.props.addNotif({type: "message", content: text, receiver_id: (this.props.tag[0] ? this.props.tag[0].user_id : null)})
  }

  handleTag = text => {
    this.props.fetchUser(text)
  }


  render() {
    return (
      <div className="group">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1 className="page-header">Group Name: {this.props.group[0].name }</h1>
        <h3>Group Members: </h3>
        <GroupList group={this.props.group} />
        <div className="notification-box">
          <h3>Notifications:</h3>
          <NotificationList className="list-group" notifs={this.props.notifs}/>
        </div>
        <InputBox newTodo
              onSave={this.handleSave}
              onTag={this.handleTag}
              taggedUser={this.props.tag}
              label="notif"
              placeholder="What would you like to say to the group?"
             />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  group: store.group.group,
  notifs: store.group.notifs,
  tag: store.group.tag
  });

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({ addNotif: addNotif, fetchNotifs: fetchNotifs, fetchGroup: fetchGroup, fetchUser: fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);


