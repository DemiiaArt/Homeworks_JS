import React, { Component } from 'react'
import '../styles/Card.css'

export default class Card extends Component {
  render() {
    return (
      <li className='card'>
        <div className="card__header">
            <img src={this.props.imgSourse} alt={this.props.description} className="card__img" />
        </div>
        <div className="card__body">
            <h3 className="card__title">{this.props.title}</h3>
            <p className="card__copy">{this.props.copy}</p>
        </div>
        <div className="card__footer">
            <button className="buyBtn">Buy IT!</button>
        </div>
      </li>
    )
  }
}
