import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { fetchGroup, fetchNotifs, addNotif, fetchTagUser } from "../actions/groupActions"
import { fetchUser } from "../actions/userActions"
import { fetchGoal } from "../actions/goalActions"
import { openPotDialog, closePotDialog, handleMoneyInput, addGroupMoney, fetchUserMoney, fetchGroupMoney } from "../actions/moneyActions"
import { RaisedButton, FlatButton, Dialog, AppBar, List, IconMenu, MenuItem, IconButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import MuiText from '../components/MuiText'
import muiTheme from '../components/MuiTheme'
import NotificationList from '../components/NotificationList'
import GroupList from '../components/GroupList'
import MoneyStatus from '../components/MoneyStatus'
import InputBox from '../components/InputBox'
import Nav from '../components/Nav'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();



class Group_page extends Component {


  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
    this.props.fetchUser(1)
    this.props.fetchUserMoney();
    this.props.fetchGroupMoney();

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

  submitMoney = () => {
    this.props.addGroupMoney()
    this.props.closePotDialog()
  }

  render() {
    const potActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closePotDialog() }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!this.props.newMoneyInput}
        onTouchTap={() => { this.submitMoney()}}
      />,
    ];

    return (
      <div className="group">
        <span id="dropdown-menu-group">
          <MuiThemeProvider muiTheme={muiTheme}>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="New Goal" onClick={ () => this.props.openAddGoalDialog() }/>
            <MenuItem><Link to="/" id="my-goals">My Goals</Link></MenuItem>
            <MenuItem><Link to="group" id="group-huddle">Group Huddle</Link></MenuItem>
            <MenuItem primaryText="Start Challenge" onClick={ () => this.props.openPotDialog() }/>
            <MenuItem primaryText="Sign Out" />
          </IconMenu>
          </MuiThemeProvider>
        </span>

        <MoneyStatus money={this.props.money} />

        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Place group incentives:"
            actions={potActions}
            modal={true}
            open={!!this.props.potDialog}
          >
          <form action="/your-charge-code" method="POST" id="payment-form">
            <span className="payment-errors"></span>
              <MuiText
                hintText=""
                floatingLabelText="I would like to pitch in $"
                text={this.props.newMoneyInput}
                handleChange={this.props.handleMoneyInput}
                handleSubmit={this.props.handleMoneyInput}
                addRow={()=> { }}
                />
            <div className="form-row">
              <label>
                <span>Card Number</span>
                <input type="text" size="20" data-stripe="number" />
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Expiration (MM/YY)</span>
                <input type="text" size="2" data-stripe="exp_month" />
              </label>
              <span> / </span>
              <input type="text" size="2" data-stripe="exp_year" />
            </div>

            <div className="form-row">
              <label>
                <span>CVC</span>
                <input type="text" size="4" data-stripe="cvc" />
              </label>
            </div>
          </form>

          </Dialog>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AppBar
            title={this.props.group[0].name }
            iconClassNameLeft="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
            <GroupList group={this.props.group} click={this.handleTouchTap} fetchUser={this.props.fetchUser} fetchGoal={this.props.fetchGoal}/>
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
  tag: store.group.tag,
  potDialog: store.money.potDialog,
  newMoneyInput: store.money.newMoneyInput,
  groupMoney: store.money.groupMoney,
  money: store.money
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
    openPotDialog,
    closePotDialog,
    handleMoneyInput,
    addGroupMoney,
    fetchGroupMoney,
    fetchUserMoney,
    openPotDialog
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);
//
// <Nav
//   openAddGoalDialog={this.props.openAddGoalDialog}
//   openPotDialog={this.props.openPotDialog}
//   />
