import React, { Component } from "react";
import axios from "axios";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/wishes", {
        name: this.state.name,
        image: this.state.image,
        id: Math.random()
      })
      .then(response => {
        this.props.changeTab("wishes");
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">&#x2714;</button>
        <button
          type="reset"
          onClick={() => this.setState({ name: "", image: "" })}
        >
          X
        </button>
      </form>
    );
  }
}
