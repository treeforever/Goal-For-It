import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGroup, fetchNotifs, addNotif, fetchTagUser } from "../actions/groupActions"
import { fetchUser } from "../actions/userActions"
import { fetchGoal } from "../actions/goalActions"
import { openPotDialog } from "../actions/moneyActions"
import { RaisedButton, FlatButton, Dialog } from 'material-ui'


import MuiText from '../components/MuiText'
import muiTheme from '../components/MuiTheme'
import NotificationList from '../components/NotificationList'
import GroupList from '../components/GroupList'
import MoneyStatus from '../components/MoneyStatus'
import InputBox from '../components/InputBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();


class Group_page extends Component {


  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
    this.props.fetchUser(1)
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
  // this.props.fetchGoal()
}

  render() {
    return (
      <div className="group">
        <MoneyStatus />
        <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton label="pot" onClick={ () => this.props.openPotDialog() } />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Add New Goal"
            modal={true}
            open={!!this.props.openGoalDialog}
          >
          <MuiText
            hintText="goal"
            floatingLabelText="goal"
            text={this.props.goalText}
            handleChange={this.props.handleGoalInput}
            handleSubmit={this.props.handleGoalInput}
            addRow={()=> { }}
            />
          </Dialog>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AppBar
            title={this.props.group[0].name }
            iconClassNameLeft="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
            <GroupList group={this.props.group} click={this.handleTouchTap} fetchGoal={this.props.fetchGoal}/>
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
    fetchTagUser: fetchTagUser,
    fetchGoal,
    openPotDialog
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);
