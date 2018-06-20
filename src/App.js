import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    
        return (
      <div className="App">
       <h1>Hi {Person.name}! This is a react App.</h1>
       <p>This is really working!</p>
       <Person />
      </div>
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));

  }
}

export default App;
