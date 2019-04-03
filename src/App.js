import React, { Component } from "react";
import globe from "./img/globe.svg";
import "./App.css";
import Wishes from "./component/Wishes";
import Add from "./component/Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "wishes"
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({ tab: tab });
  }

  render() {
    return (
      <main>
        <img src={globe} alt="globetrotter logo" />
        <h1>globetrotter</h1>
        <button onClick={() => this.changeTab("wishes")}>wishes</button>
        <button onClick={() => this.changeTab("add")}>+</button>
        <button onClick={() => this.changeTab("memories")}>memories</button>
        {this.state.tab === "wishes" ? (
          <Wishes />
        ) : this.state.tab === "add" ? (
          <Add changeTab={this.changeTab} />
        ) : this.state.tab === "memories" ? (
          <p>Memories </p>
        ) : (
          <p>This is an error</p>
        )}
      </main>
    );
  }
}

export default App;
