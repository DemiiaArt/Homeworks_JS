import React, { Component } from 'react'
import NavLink from './NavLink.jsx'
import '../styles/NavLinks.css'
import "../styles/global.css";

export default class NavMenu extends Component {
  render() {
    return (
      <React.Fragment>
         <nav className='sideBar'>
            <NavLink  page="About us"/>
            <NavLink  page="Contacts"/>
            <NavLink  page="Gallery"/>
            <NavLink  page="News"/>
         </nav>
      </React.Fragment>
    )
  }
}
