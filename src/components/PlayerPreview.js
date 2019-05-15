import React, {Component} from 'react';

function PlayerPreview(props) {
    return (
      <div>
        <div className="column">
          <img src={props.avatar} alt={props.username} className="avatar"/>
          <h2 className="username">@{props.username}</h2>
  
      {props.children}
        </div>
      </div>
    );
  }
  export default PlayerPreview;