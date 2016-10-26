import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MuiText from './MuiText'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'
// import MenuItem from './MenuItem'
import MenuItem from 'material-ui/MenuItem'


injectTapEventPlugin();

class Step extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  handleMilestones = () => {

  }
  render() {
    console.log("milestones are ", this.props.milestones)
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <SelectField
            floatingLabelText="Milestone"
            value={1}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText={this.props.milestones[1]} />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
        </MuiThemeProvider>


      </div>
    );
  }
}

export default Step;
