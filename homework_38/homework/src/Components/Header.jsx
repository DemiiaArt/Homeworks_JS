import React, { Component } from "react";
import reactLogo from "./logo192.png";
import "../styles/Header.css";

class NavLink extends Component {
  render() {
    return <span>{this.props.page}</span>;
  }
}

class SearchingInput extends Component {
  render() {
    return (
      <label className="searchField">
        <input type='search' placeholder="searching..." ></input>
        <button>🔍</button>
      </label>
    )
  }
}

export default class Header extends Component {
  render() {
    return (
      <header className="container">
        <img src={reactLogo} alt="React logo" width={50} height={50} />
        <nav className="navLinks">
          <NavLink page="Rect Develop Page" />
          <NavLink page="My account" />
          <NavLink page="FAQ" />
        </nav>
        <SearchingInput />
      </header>
    );
  }
}
