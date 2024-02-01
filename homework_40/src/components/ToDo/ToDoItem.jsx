// import React, { Component } from 'react'

// export default class ToDoItem extends Component {
//     componentDidUpdate() {
//         console.log('Item componentDidUpdate');
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         // console.log('first', nextProps.item.completed);
//         // console.log('second', this.props.item.completed);
//         // console.log('nextState', nextState);
        
//         return true;
//     }

//     componentWillUnmount() {
//         console.log('item componentWillUnmount');

//         // cleanInterval
//         // removeEventListener
//     }
//   render() {
//     let { item: {title, completed},
//     handlerCompleteTask,
//     handlerCloseTask
//  } = this.props

//     return (
//       <li>
//         {title}
//         {completed ? <button onClick={handlerCloseTask}>Close</button> : <button onClick={handlerCompleteTask}>Completed</button>}
//       </li>
//     )
//   }
// }
