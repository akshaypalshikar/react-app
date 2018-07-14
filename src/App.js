import React, { Component } from 'react';
import appCssClasses from './App.css';
import Person from './Person/Person';


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
    const personIndex = this.state.persons.findIndex(p=>p.id===id);
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
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
        persons = ( <div id="persons">
                      {this.state.persons.map((person,index)=>{
                       return (<Person {...person} key={person.id} 
                        clicked={()=>this.deletePersonHandler(index)}
                        changed={event=>this.nameChangedHandler(event,person.id)}/>);
                      })}
                    </div>
                  );
        btnClass = appCssClasses.Red;
    }

    const assignedCssClasses = [];
    if(this.state.persons.length<=2){
      assignedCssClasses.push(appCssClasses.red);
    }
    if(this.state.persons.length<=1){
      assignedCssClasses.push(appCssClasses.bold);
    }


        return (
      
          <div className={appCssClasses.App}>
              <h1>Hi! This is a react App.</h1>
              <p className={assignedCssClasses.join(' ')}>This is really working!</p>
              <button className={btnClass} onClick={this.togglePersonsHandler.bind(this)}>Toggle Persons</button>
              {persons}
          </div>
      
    );
  
 // return React.createElement('div',null,React.createElement( 'h1', null,'Hi, This is a react app!!'));
  }
  
}

export default App;
