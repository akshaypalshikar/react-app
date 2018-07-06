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
    unchangedState : "This will be untouched",
    showPersons:true
  }

  togglePersonsHandler = (newName) => {
    //console.log("this was clicked!");
    //don't do this : this.state.persons[0].name = "Akshay Palshikar";
    this.setState({
    showPersons:!this.state.showPersons
    })
    console.log("this.state.showPersons : "+this.state.showPersons)
  }

 
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
        return (
      <div className="App">
          <h1>Hi! This is a react App.</h1>
          <p>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Toggle Persons</button>
          { this.state.showPersons?
            <div id="persons">
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My hobbies : Coding</Person>
              <Person  name={this.state.persons[1].name} 
                      age={this.state.persons[1].age} 
                     />
            </div>
            :null
          }
      </div>
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));
  }
  
}

export default App;
