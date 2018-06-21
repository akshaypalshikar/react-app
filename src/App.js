import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    
        return (
      <div className="App">
       <h1>Hi! This is a react App.</h1>
       <p>This is really working!</p>
       <Person name="Akshay" age='30'>My hobbies : Coding</Person>
       <Person name="Poorva" age='30'/>
      </div>
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));

  }
}

export default App;
