import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    name : "react-app",
    persons : [
      {name : "Akshay", age : 30},
      {name : "Poorva", age : 30}
    ]
  }

  switchNameHandler = () => {
    console.log("this was clicked!");
  }
  render() {
        return (
      <div className="App">
       <h1>Hi! This is a react App.</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies : Coding</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));

  }
}

export default App;
