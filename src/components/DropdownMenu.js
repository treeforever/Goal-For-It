import React from 'react'
import { Link } from "react-router"

import { IconMenu, MenuItem, IconButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import muiTheme from '../components/MuiTheme'


const DropdownMenu = (props) => (
  <span id="dropdown-menu-group">
    <MuiThemeProvider muiTheme={muiTheme}>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="New Goal" onClick={ () => props.openAddGoalDialog() }/>
      <MenuItem><Link to="/">My Goals</Link></MenuItem>
      <MenuItem><Link to="group">Group Huddle</Link></MenuItem>
      <MenuItem primaryText="Start Challenge" onClick={ () => props.openPotDialog() }/>
      <MenuItem primaryText="Sign Out" />
    </IconMenu>
    </MuiThemeProvider>
  </span>
)

export default DropdownMenu
