import React, { Component } from 'react';
// here the component is the part of library and here we are destructuring the react we can use directly the componebt without destructuring  it as   React.Component
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
// function App() { //functions and classes is use to return the HTML  they work the same as showq the return by below using class
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.  -Coding with CK
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component{
//   constructor() {
//     super();

//     this.state = {
//       string: 'HELLO PK',
//       myNumber: '101'
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p> {this.state.string} </p>
//           {/* {} curly bracket means want to use javaScript inside JSX */}
//           <p onClick={() => this.setState({ myNumber: "51" })}>  {this.state.myNumber} </p>
//           {/* Here setState changes the state(key:value) of state object by defining their new properties or KEY:VALUE. and this is happend what a button clicked using onCkick method  */}
//           <button onClick={() => this.setState({ string: "hello CK" })}> Change the text</button>
//           {/* when button clicked onClick run the function which is inside the {} bracket just we know jsx understent this is javaScript and that function changes the string property using the setState method, this setState method take the value as an object and we can define the value in (key:value) Pairs    */}
//         </header>
//       </div>
//       // Note :-  when we change the state  or use click the burttonm to change the state:- 
//       // React tell the Virtual-DOM:-  hey i got a click what to do? and them dom change the State and Rerender the related JSX-function again, means when ever state changes we always rerender the related function and display the current value
//     );
//   }
// }
//  SPA= single page application
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [ ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    // fetch( "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110052&date=11-11-2021" )
      .then((response) =>
        response.json()
      ) /*to get the response in json format we are using json method */
      .then((users) => this.setState({ monsters: users })); /* seting monstore to new users array which recived from API */
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} / >
        {/* Tiwari-PK is children component for  CardList */}
        {/* {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))} */}
      </div>
    );
  }
}
export default App;
