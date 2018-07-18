import React, { Component } from 'react';
import appCssClasses from './App.css';
import Cockpit from './../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    name : "react-app",
    persons : [
      {id:1, name : "Akshay", age : 30},
      {id:2, name : "Poorva", age : 30}
    ],
    unchangedState : "This will be untouched",
    showPersons:true
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(
      p=>{
        return p.id===id;
      }
    );
    const person = {...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons});
    console.log( this.state.persons);
  }


  togglePersonsHandler = (newName) => {
    this.setState({
    showPersons:!this.state.showPersons
    })
    console.log("this.state.showPersons : "+this.state.showPersons)
  }

  deletePersonHandler =  (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
 
  render() {
    const cssClasses = appCssClasses;
    return (
      <div id="App" className={appCssClasses.App}>
        <Cockpit {...this.state} appCssClasses={cssClasses} 
            deletePersonHandler =  {this.deletePersonHandler}
            togglePersonsHandler = {this.togglePersonsHandler}
            nameChangedHandler = {this.nameChangedHandler}
        />
      </div>
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));
  }
  
}

export default App;
