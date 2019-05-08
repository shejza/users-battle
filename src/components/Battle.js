import React, {Component} from 'react';
import Joi from "joi-browser";
import Form from "./common/Form";

class Battle extends Form {
  state = {
    data: { player1: "" },
    errors: {}
  };

  schema = {
    player1: Joi.string()
      .required()
      .label("Github Username"),
    // player2: Joi.string()
    //   .required()
    //   .label("Github Username")
  };

  doSubmit = async () => {
    try {
      const {data} = this.state;
console.log(data);
      // const {state} = this.props.location;
      // window.location = state ? state.from.pathname : '/';
    } catch (ex) {

      if(ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }

    }

  };

  render() {
    return (
      <div>
        <form className="row" onSubmit={this.handleSubmit}>
        <div className="col-md-6">

          <h2>Player One</h2>
          {this.renderInput("player1", "Github Username")}
          <br/><br/>
          {this.renderButton("Submit")}
        </div>
        {/*<div className="col-md-6">*/}
          {/*<h2>Player Two</h2>*/}
          {/*{this.renderInput("player2", "Github Username")}*/}
          {/*<br/><br/>*/}
          {/*{this.renderButton("Submit")}*/}
        {/*</div>*/}
        </form>
      </div>
    );
  }
}

export default Battle;
