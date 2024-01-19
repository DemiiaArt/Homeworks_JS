import React, { Component } from "react";
import './styles/style.css'

const animals = [
  { type: `turtle`, icon: `🐢`, isGreen: true },
  { type: `octopus`, icon: `🐙`, isGreen: false },
  { type: `fish`, icon: `🐠`, isGreen: false },
  { type: `flamingo`, icon: `🦩`, isGreen: false },
  { type: `penguin`, icon: `🐧`, isGreen: false },
];

class RenderList extends Component {
  constructor(props) {
    super(props);


    // const chooseInterval = setInterval (()=> {
    //   console.log(this.state.list);
    //   this.setState({
    //     list: this.state.list.forEach(item => item.isGreen = true)
    //   })

    //   // this.state.list.find('') === 0 && clearInterval(chooseInterval)
    // }, 2000) 

    this.state = {
      animals: [...props.list],
    }

    // this.chooseInterval = setInterval (()=> {
    //   const randomIndex = Math.floor(Math.random() * animals.length);
    // }, 2000)
  }


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
                <tr key={index} className = {item.isGreen ? 'chooze' : ''}>
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
