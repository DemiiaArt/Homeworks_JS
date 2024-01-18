import React, { Component } from "react";
import Card from "./Card";
import "../styles/global.css";

const cardArray = [
  {
    imgSourse:
      "https://rubryka.com/wp-content/uploads/2018/09/programuvannya.jpg",
    description: "item 1",
    title: "Card 1",
    copy: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt impedit harum eos nemo saepe veniam perspiciatis voluptates unde optio ratione. Temporibus quam enim in illo ut libero architecto provident deleniti!",
  },
  {
    imgSourse:
      "https://osvitoria.media/wp-content/uploads/2020/04/353974-PBME6B-537.jpg",
    description: "item 2",
    title: "Card 2",
    copy: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
  {
    imgSourse:
      "https://i0.wp.com/itc.ua/wp-content/uploads/2021/02/it-lang.jpg?w=1500&quality=100&strip=all&ssl=1",
    description: "item 3",
    title: "Card 3",
    copy: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt impedit harum eos nemo saepe veniam perspiciatis voluptates unde optio ratione. ",
  },
];

export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Welcome!</h1>
          <ul className="cardList">
            {cardArray.map((item, index) => (
                <Card
                  key={index}
                  imgSourse={item.imgSourse}
                  description={item.description}
                  title={item.title}
                  copy={item.copy}
                />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
