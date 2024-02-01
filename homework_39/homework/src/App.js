import React, { Component } from "react";
import "./styles/style.css";

const animals = [
  { id: 1, type: `turtle`, icon: `🐢`, isGreen: false },
  { id: 2, type: `octopus`, icon: `🐙`, isGreen: false },
  { id: 3, type: `fish`, icon: `🐠`, isGreen: false },
  { id: 4, type: `flamingo`, icon: `🦩`, isGreen: false },
  { id: 5, type: `penguin`, icon: `🐧`, isGreen: false },
];

function getRandom (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min) + min)
}


 class RenderList extends Component {
  constructor(props) {
    super(props);

    // setTimeout(()=> {
    //   this.setState({
    //     styleItem: {color: `green`, fontWeight: `bold`}
    //   })
    // }, 2000)

    const activeItem = setInterval(()=> {
      let randomIndex = getRandom(0, this.state.listIndex.length);
      let randomItem = this.state.listIndex[randomIndex];

      let updatedList = [...this.state.list];
      updatedList[randomItem].active = true;
      
      this.state.listIndex.splice(randomIndex, 1)

      console.log(this.state.listIndex);

      
      if (!this.state.listIndex.length) {
        clearInterval(activeItem)
        this.state.borderWidth = `20px`
      }
      
      if(this.state.listIndex.length === Math.floor(this.state.list.length / 2)) {
        this.state.borderWidth = `10px`
      }
      
      this.setState({})
    }, 2000)
  }

  state = {
    list: this.props.list,
    styleItem: {},
    listIndex: Object.keys(this.props.list),
    borderWidth: 0,
  }
  render() {
    // console.log(this);
    return (
      <table style={{borderWidth: this.state.borderWidth}}>
           <thead>
             <tr>
               <th>type</th>
               <th>icon</th>
             </tr>
           </thead>
           <tbody>
            {this.props.list.map(item => (
              <tr style={item.active && {color: `green`, fontWeight: `bold`}} key={item.id}>
                <td>{item.type}</td>
                <td>{item.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )
  }
}




















// class RenderList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: [...props.list],
//       borderSize: 0,
//     };

//     const chooseInterval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * animals.length);
//       const updatedList = this.state.list.map((item, index) => ({
//         ...item,
//         isGreen: index === randomIndex ? true : item.isGreen,
//       }));

//       const greenCount = updatedList.filter((item) => item.isGreen).length;
//       const halfLength = Math.ceil(updatedList.length / 2);

//       if (greenCount === halfLength) {
//         this.setState({borderSize: 10})
//       } else if (greenCount === updatedList.length) {
//         this.setState ({borderSize: 20});
//         clearInterval(this.chooseInterval);
//       }
//       this.setState({ list: updatedList });
//     }, 2000);
//   }

//   state = Object.assign({}, this.props);

//   render() {

//     const borderStyle = {
//       border: `${this.state.borderSize}px solid black`
//     }
//     return (
//       <React.Fragment>
//         <table style={borderStyle}>
//           <thead>
//             <tr>
//               <th>type</th>
//               <th>icon</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.list &&
//               this.state.list.map((item, index) => (
//                 <tr key={index} className={item.isGreen ? "chooze" : ""}>
//                   <td>{item.type}</td>
//                   <td>{item.icon}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </React.Fragment>
//     );
//   }
// }

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RenderList list={animals} />
      </React.Fragment>
    );
  }
}
