import React, { Component } from "react";
import List from "./List.jsx";
import "./ToDo.css";

export default class ToDo extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  transferToSecond() {
    // let currentTask = this.state.firstList[0];
    // let updateFirstList = this.state.firstList.slice(1);
    // let updateSecondList = [currentTask, ...this.state.secondList];

    this.setState({
      // firstList: updateFirstList,
      // secondList: updateSecondList,
      secondList: [this.state.firstList.shift(), ...this.state.secondList]
    });
  }

  transferToFirst() {
    // let currentTask = this.state.secondList[0];
    // let updateSecondList = this.state.secondList.slice(1);
    // let updateFirstList = [currentTask, ...this.state.firstList];

    this.setState({
      // firstList: updateFirstList,
      // secondList: updateSecondList,
      firstList: [this.state.secondList.shift(), ...this.state.firstList]
    });
  }
  transferToThird() {
    // let currentTask = this.state.secondList[0];
    // let updateSecondList = this.state.secondList.slice(1);
    // let updateThirdList = [currentTask, ...this.state.thirdList];

    this.setState({
      // thirdList: updateThirdList,
      // secondList: updateSecondList,
      thirdList: [this.state.secondList.shift(), ...this.state.thirdList]
    });
  }
  removeLastItem() {
    this.setState({
      thirdList: this.state.thirdList.slice(1),
    });
  }

  render() {
    return (
      <div className="allLists">
        <List
          list={this.state.firstList}
          actions={[
            {
              text: "Transfer first to right",
              action: this.transferToSecond.bind(this),
            },
          ]}
        />
        <List
          list={this.state.secondList}
          actions={[
            { text: "Transfer first to left", action: this.transferToFirst.bind(this) },
            { text: "Transfer first to right", action: this.transferToThird.bind(this) },
          ]}
        />
        <List
          list={this.state.thirdList}
          actions={[{ text: "Remove last item", action: this.removeLastItem.bind(this) }]}
        />
      </div>
    );
  }
}
