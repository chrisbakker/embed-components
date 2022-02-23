import React, { Component } from "react";

// Create React Element.
export default class Example extends React.Component {
    onClick() {
        console.log("Shadow!");
    }
    render() {
        return <div onClick={this.onClick}>Hello React!</div>;
    }
}
