// import React, { Component } from "react";
// import ToDoItem from "./ToDoItem.jsx";

// export default class ToDoList extends Component {
//   componentDidMount() {
//     console.log("toDoList componentDidMount");
//   }
//   componentDidUpdate() {
//     console.log("toDoList componentDidUpdate");
//   }

//   state = Object.assign({}, this.props);

//   handlerCompleteTask(index) {
//     console.log("handlerCompleteTask", index);

//     this.setState({
//       list: this.state.list.map((item, i) => {
//         if (i === index) item.completed = true;
//         return item;
//       }),
//     });
//   }

//   handlerCloseTask(index) {
//     console.log("handlerCloseTask");

//     this.setState({
//       list: this.state.list.filter((item, i) => i !== index),
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.list.map((item, index) => (
//           <ToDoItem
//             key={item.id}
//             item={item}
//             handlerCompleteTask={this.handlerCompleteTask.bind(this, index)}
//             handlerCloseTask={this.handlerCloseTask.bind(this, index)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }
