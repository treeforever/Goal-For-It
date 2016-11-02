import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGroup, fetchNotifs, addNotif, fetchTagUser } from "../actions/groupActions"
import { fetchUser } from "../actions/userActions"
import { fetchGoal, fetchFriendGoals } from "../actions/goalActions"
import { fetchMoney} from "../actions/moneyActions"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import MobileTearSheet from '../components/MobileTearSheet';

import NotificationList from '../components/NotificationList'
import GroupList from '../components/GroupList'
import LeaderBoard from '../components/LeaderBoard'
import InputBox from '../components/InputBox'
import Nav from './Nav'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';


class Group_page extends Component {


  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
  }

   handleSave = text => {

    const receiver = (this.props.tag[0] ? this.props.tag[0].user_id : null)
    this.props.addNotif({sender_id: "amna", type: "message", content: text, receiver_id: receiver})
  }

  handleTag = text => {
    this.props.fetchTagUser(text)
  }

  handleTouchTap() {
    alert('You clicked the Chip.');
  }

  render() {
    console.log('GROUP PAG USERS', this.props.group)

    return (
      <div className="group">
        <Nav id="nav"/>
        <h2 id='group-name'>{this.props.group[0].name}</h2>
        <main className="container">
          <MuiThemeProvider>
              <GroupList group={this.props.group} click={this.handleTouchTap} fetchUser={this.props.fetchUser} fetchFriendGoals={this.props.fetchFriendGoals} fetchGoal={this.props.fetchGoal}/>
          </MuiThemeProvider>
          <InputBox newTodo
                onSave={this.handleSave}
                onTag={this.handleTag}
                taggedUser={this.props.tag}
                label="notif"
                placeholder="What would you like to say to the group?"
               />
          <div id="notificationList">
            <MuiThemeProvider>
              <List style={{color: 'white'}}>
                <NotificationList className="list-group" notifs={this.props.notifs} sender={this.props.user.currentUser}/>
              </List>
            </MuiThemeProvider>
          </div>
          <div className="leaderBoard">
            <h2>Leader Board</h2>
            <MuiThemeProvider>
                <LeaderBoard users={this.props.group}/>
            </MuiThemeProvider>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user,
  group: store.group.group,
  notifs: store.group.notifs,
  tag: store.group.tag,
  });

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({
    addNotif,
    fetchNotifs,
    fetchGroup,
    fetchUser,
    fetchTagUser,
    fetchGoal,
    fetchFriendGoals,
    fetchMoney,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);
