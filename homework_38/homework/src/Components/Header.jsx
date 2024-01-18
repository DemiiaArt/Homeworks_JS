import React, { Component } from "react";
import reactLogo from "./logo192.png";
import "../styles/Header.css";
import "../styles/Header.css";

class SearchingInput extends Component {
  render() {
    return (
      <label className="searchField">
        <input type="search" placeholder="searching..."></input>
        <button>🔍</button>
      </label>
    );
  }
}

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container headerWrapper">
          <img src={reactLogo} alt="React logo" width={50} height={50} />
          <nav className="navLinks">
            <span>Rect Develop Page</span>
            <span>My account</span>
            <span>FAQ</span>
          </nav>
          <SearchingInput />
        </div>
      </header>
    );
  }
}
