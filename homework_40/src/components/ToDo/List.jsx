import React, { Component } from "react";

export default class List extends Component {
  // state = Object.assign({}, this.props);

  render() {
    console.log("this", this);
    return (
      <div className="list">
        <ul>
          {this.props.list.map((item, index) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

        {this.props.list.length > 0 && (
          <div className="buttonBox">
            {this.props.actions.map((item) => (
              <button onClick={item.action}>{item.text}</button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
