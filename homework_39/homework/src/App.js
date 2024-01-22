import React, { Component } from "react";
import "./styles/style.css";

const animals = [
  { type: `turtle`, icon: `🐢`, isGreen: false },
  { type: `octopus`, icon: `🐙`, isGreen: false },
  { type: `fish`, icon: `🐠`, isGreen: false },
  { type: `flamingo`, icon: `🦩`, isGreen: false },
  { type: `penguin`, icon: `🐧`, isGreen: false },
];

class RenderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [...props.list],
    };

    const chooseInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const updatedList = this.state.list.map((item, index) => ({
        ...item,
        isGreen: index === randomIndex ? true : item.isGreen,
      }));

      this.setState({ list: updatedList });
      // console.log(this.props.list);

      const greenCount = updatedList.filter((item) => item.isGreen).length;
      const halfLength = Math.ceil(updatedList.length / 2);

      updatedList.every((item) => item.isGreen) &&
        clearInterval(chooseInterval);
    }, 2000);
  }

  state = Object.assign({}, this.props);

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>type</th>
              <th>icon</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list &&
              this.state.list.map((item, index) => (
                <tr key={index} className={item.isGreen ? "chooze" : ""}>
                  <td>{item.type}</td>
                  <td>{item.icon}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RenderList list={animals} />
      </React.Fragment>
    );
  }
}
