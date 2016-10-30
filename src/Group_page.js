import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGroup, fetchNotifs, addNotif, fetchTagUser } from "./actions/groupActions"
import { fetchUser } from "./actions/userActions"

import NotificationList from './NotificationList'
import GroupList from './GroupList'
import InputBox from './components/InputBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class Group_page extends Component {


  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
    this.props.fetchUser(1)
  }

   handleSave = text => {
    console.log(this.props.tag[0])

    const receiver = (this.props.tag[0] ? this.props.tag[0].user_id : null)
    this.props.addNotif({sender_id: "amna", type: "message", content: text, receiver_id: receiver})
  }

  handleTag = text => {
    this.props.fetchTagUser(text)
  }

  handleTouchTap() {
  alert('You clicked the Chip.');
  // this.props.fetchGoal(goal)
}


  render() {
    return (
      <div className="group">
        <MuiThemeProvider>
          <AppBar
            title={this.props.group[0].name }
            iconClassNameLeft="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
            <GroupList group={this.props.group} click={this.handleTouchTap}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <List style={{color: 'white'}}>
            <NotificationList className="list-group" notifs={this.props.notifs} sender={this.props.user.user}/>
          </List>
        </MuiThemeProvider>
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
  user: store.user,
  group: store.group.group,
  notifs: store.group.notifs,
  tag: store.group.tag
  });

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({
    addNotif: addNotif,
    fetchNotifs: fetchNotifs,
    fetchGroup: fetchGroup,
    fetchUser: fetchUser,
    fetchTagUser: fetchTagUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);


