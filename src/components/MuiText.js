import React from 'react';
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all'
});

const MuiText= () => (
  <div>
  <p>hahhaha</p>
    <MuiThemeProvider muiTheme={muiTheme}>
      <TextField
        hintText="be as specific as you can"
        floatingLabelText="What is your next ambitious goal?"
      />
    </MuiThemeProvider>
  </div>
)

export default MuiText;
