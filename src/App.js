import React, { Component } from 'react';
// here the component is the part of library and here we are destructuring the react. we can use directly the componebt without destructuring  it, as   React.Component
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box-component';
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
      // this array will take the data from the api
      monsters: [],
      // this string will take the data form searchfield
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // fetch( "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110052&date=11-11-2021" )
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //will give us full response with header and body. what we want is only the body data in a format
      //.then(response)=> console.log(response)
      /*to get the body data in a json format we are using json method */
      .then((response) => response.json())
      /* setting the body data(recived from API) into a monster array.*/
      .then((users) => this.setState({ monsters: users }));
  }
//when ever we right something inside the serach field. it set the value to searchfield  , which is initially empty
  handleChange=(e) => this.setState({ searchField: e.target.value })

  render() {
    //destructuring the (monster and srarchField from this.state )  it is like below const monsters = this.state.monsters; const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    // The filter() method creates a new array with all the elements that pass the test implemented by the callback() function.
    // includes() method determines whether a string contains the given characters within it or not. note it is case sensetive
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters </h1>
        {/* here we are passing placeholder and handlechange function as a props into the components */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        {/* here we are passing filtered data to card components as a props if data match with monster array will shown by the card components */}
        <CardList monsters={filteredMonsters} />

        {/* <CardList monsters={this.state.monsters} /> */}
        {/* {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))} */}
      </div>
    );
  }
}
export default App;
