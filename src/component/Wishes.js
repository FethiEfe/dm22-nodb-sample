import React, { Component } from "react";
import axios from "axios";
import "./Wish.css";
import Wish from "./Wish";

export default class Wishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: []
    };
    this.updateWishes = this.updateWishes.bind(this);
  }
  componentDidMount() {
    this.updateWishes();
  }

  updateWishes() {
    axios.get("/api/wishes").then(response => {
      this.setState({ wishes: response.data });
    });
  }

  render() {
    return (
      <section>
        {this.state.wishes.map((wish, index) => (
          <Wish
            name={wish.name}
            image={wish.image}
            key={index}
            updateWishes={this.updateWishes}
          />
        ))}
      </section>
    );
  }
}
