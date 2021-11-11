import React from "react";
import logo from './logo.svg';
import './app-logo.css';
import './card.style.css';

export const Card = (props) => (
   <div>
    <div className="card-container">
     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
      <h2> {props.monster.name} </h2>
      <h2> {props.monster.email} </h2>
    </div>
  </div>
);
