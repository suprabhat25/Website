import React, { Component } from "react";
import "./Avatar.css";
import Avatarlist from "./Avatarlist";
import "tachyons";
class Avatar extends Component {
  // state helps us to change/modify.
  // Constructor is used to use 'state'.

  constructor() {
    super();
    this.state = {
      name: "Welcome to ReactJS World",
    };
  }
  namechange() {
    this.setState({
      name: "Welcome to the Updated ReactJS World",
    });
  }
  render() {
    const avatarlistarray = [
      {
        id: 1,
        name: "Suprabhat",
        work: "Web Developer",
      },
      {
        id: 2,
        name: "Kumar",
        work: "Front End Dev",
      },
      {
        id: 1,
        name: "Supra",
        work: "Databases",
      },
      {
        id: 1,
        name: "Avinash",
        work: "Mongo DB",
      },
    ];

    const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
      return (
        <Avatarlist
          key={i}
          id={avatarlistarray[i].id}
          name={avatarlistarray[i].name}
          work={avatarlistarray[i].work}
        />
      );
    });
    return (
      <div className="mainpage">
        <h1> {this.state.name} </h1>
        {arrayavatarcard}
        <button onClick={() => this.namechange()}> Subscribe </button>
      </div>
    );
  }
}
//const Avatar = (props) => {
export default Avatar;
/*
state is managed within the component.
state can be changed.
useState Hook - functional component.
this.state - class components.
*/
