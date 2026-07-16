// @ts-nocheck

import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeDetail = () => {
    this.setState({
      color: "blue",
      Brand: "Tesla",
      Model: "Model S",
      year: 2023,
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
    // brinchi render bulganda ishga tushadi
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // runs before componenment
  }

  componentDidUpdate() {}
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color {this.state.color} - Modul:{this.state.model} from{" "}
          {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          changeDetail
        </button>
      </div>
    );
  }
}

export default Test;
