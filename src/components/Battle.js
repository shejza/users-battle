import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import PlayerPreview from './PlayerPreview';

var PropTypes = require('prop-types');



class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState(function () {
        return {
          username: value
        }
      }
    )
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor='username'>{this.props.label}</label>
        <input type="text" id="username" placeholder='github username' type='text' autoComplete="off" value={this.state.username} onChange={this.handleChange}/>
        <button className=" btn btn-dark" type="submit" disabled={!this.state.username}>Submit</button>
      </form>
    )
  }

}


class Battle extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    });
  }


  render() {
    let match = this.props.match;
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoImage = this.state.playerTwoImage;
    return (
      <div>
        <div className="row">
          {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit}/>}
          {playerOneImage !== null && (
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              id="playerOne"
            >
             <button className="reset btn btn btn-warning" onClick={this.handleReset.bind(null, 'playerOne')}>
          Reset
        </button>
            </PlayerPreview>
          )}

          {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>}
          {playerTwoImage !== null && (
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
             
              id="playerTwo"
            >
              <button className="reset btn btn btn-warning" onClick={this.handleReset.bind(null, 'playerTwo')}>
          Reset
        </button>
            </PlayerPreview>
          )}

        </div>
        <div className="row">
          {playerOneImage && playerTwoImage &&
          <Link className='btn btn-success' to={{pathname: match.url + '/results', search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName}}>Battle</Link>}</div>
      </div>
    );
  }
}

export default Battle;
