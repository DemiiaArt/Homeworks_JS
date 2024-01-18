import React, { Component } from 'react'

export default class NavLink extends Component {
  render() {
    return <span>{this.props.page}</span>;
  }
}
