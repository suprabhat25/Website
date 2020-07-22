//there are two types of components - Functional , class
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Demo.css";

//There are two ways to write components using FUNCTIONA and CLASS.

///            1. FUNCTIONAL
// Certain features need to be added while using
// Functional components like
// a. PASS KEYWORD "props" if using in the parent
// function(<Demo name="Suprabhat Kumar" />)
// if u don't want to write "props" KEYWORD then
// write "{props' name}" and {name} instead of {props.name}

// b.props is functional component so "props.name" to
// be used instead of "this.props.name" which is
// class component.

const Demo = ({ name }) => {
  // const Demo = (props) =>
  //<h1> Hello {props.name} </h1>
  return (
    <div className="maindiv_style">
      <h1> Hello {name} </h1>
      <p> Welcome to the React World</p>
    </div> // JSX looks like
    // HTML but it is not HTML.
    // {} denotes props(properties)
  );
};

///     2. CLASS
/*
class Demo extends Component {
  render() {
    return (
      <div className="maindiv_style">
        <h1> Hello {this.props.name} </h1>
        <p> Welcome to the React World</p>
      </div> // JSX looks like
      // HTML but it is not HTML.
      // {} denotes props(properties)
    );
  }
}
*/

export default Demo;

/*
props get passed to the component.
props are immutable (cannot be changed)
props - functional components
this.props - class components

*/
