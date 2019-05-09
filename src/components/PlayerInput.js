import React, {Component} from 'react';
import Joi from "joi-browser";
import Form from "./common/Form";
import Popular from "./Popular";

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    }
  }
  handleChange = (event) =>{
    let value = event.target.value;
    console.log(value);
    this.setState({
        username:value
      }
    )
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit (
      this.props.id,
      this.props.username
    )
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor='username'>{this.props.label}</label>
        <input type="text" id="username" placeholder='github username' type='text' autoComplete="off" value={this.state.username} onChange={this.handleChange}/>
        <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
      </form>
    )
  }
}
export default PlayerInput;