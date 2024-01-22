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
      borderSize: 0,
    };

    const chooseInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const updatedList = this.state.list.map((item, index) => ({
        ...item,
        isGreen: index === randomIndex ? true : item.isGreen,
      }));

      const greenCount = updatedList.filter((item) => item.isGreen).length;
      const halfLength = Math.ceil(updatedList.length / 2);

      if (greenCount === halfLength) {
        this.setState({borderSize: 10})
      } else if (greenCount === updatedList.length) {
        this.setState ({borderSize: 20});
        clearInterval(this.chooseInterval);
      }
      this.setState({ list: updatedList });
    }, 2000);
  }

  state = Object.assign({}, this.props);

  render() {

    const borderStyle = {
      border: `${this.state.borderSize}px solid black`
    }
    return (
      <React.Fragment>
        <table style={borderStyle}>
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
