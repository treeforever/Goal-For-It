import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    tagged: [],
    searchTag: true,
    text: this.props.text || '',
    textColor: "black"
  }
}
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState(this.state.text = '')
        this.setState(this.state.tagged = [])
      }
    }
  }

  handleChange = e => {
    let message = e.target.value
    let lastword = e.target.value[e.target.value.length - 1]
    this.setState({ text: message })
    let matchTag = message.match(/@(\w+) /g)
    if(lastword === "@") {
        this.setState({ searchTag: true })
    }
    if (matchTag && lastword === " " && this.state.searchTag) {
      let tag = matchTag[matchTag.length -1]
      let tagName = tag.slice(1, tag.length)
      this.props.onTag(tagName)
      this.setState({searchTag: false})
    }
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextprops', nextProps)
    if(nextProps.taggedUser.username !== ""){
      this.state.tagged = nextProps.taggedUser.username
      this.state.textColor = 'blue'
      this.setState(this.state)
    }
  }

  checkTaggedUser = () => {
    if(this.state.tagged.length > 0){
      this.setState({textColor: 'blue' })
    }
  }

  render() {
    return (
      <FieldGroup
        className="inputBox"
        type={this.props.type}
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />

    )
  }
}

export default InputBox
