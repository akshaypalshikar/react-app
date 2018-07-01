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
    ],
    unchangedState : "This will be untouched"
  }

  switchNameHandler = (newName) => {
    //console.log("this was clicked!");
    //don't do this : this.state.persons[0].name = "Akshay Palshikar";
    this.setState({persons :
      [
      {name : newName, age : 30},
      {name : "Poorva", age : 30}
    ]
  })
  }
  render() {
        return (
      <div className="App">
       <h1>Hi! This is a react App.</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler.bind(this,"Akshay Palshikar")}>Switch Name Method1</button>
       <button onClick={()=>this.switchNameHandler("Poorva!")}>Switch Name Method2 - ArrowF</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,"Akshay!")}>My hobbies : Coding</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={()=> this.switchNameHandler()}/>
      </div>
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));

  }
}

export default App;
