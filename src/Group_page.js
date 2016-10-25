import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGroup, fetchNotifs, addNotif } from "./actions/groupActions"

import NotificationList from './NotificationList'
import GroupList from './GroupList'
import InputBox from './components/InputBox'


class Group_page extends Component {


  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
  }

   handleSave = text => {
      this.props.addNotif({content: text})
  }

  render() {
    return (
      <div className="group">
        <h1>{this.props.group[0].name }</h1>
        <GroupList group={this.props.group} />
        <NotificationList notifs={this.props.notifs}/>
        <InputBox newTodo
              onSave={this.handleSave}
              label="goal"
              placeholder="What "
             />
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

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({ addNotif: addNotif, fetchNotifs: fetchNotifs, fetchGroup: fetchGroup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);


