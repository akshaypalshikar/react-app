import React, { Component } from 'react';
import appCssClasses from './App.css';
import Cockpit from './../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UDPATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UDPATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UDPATE App.js] Inside componentDidUpdate()', this.props, this.State);
  }

  state = {
    name: "react-app",
    persons: [
      { id: 1, name: "Akshay", age: 30 },
      { id: 2, name: "Poorva", age: 30 }
    ],
    unchangedState: "This will be untouched",
    showPersons: true
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.id === id;
      }
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
    console.log(this.state.persons);
  }


  togglePersonsHandler = (newName) => {
    this.setState({
      showPersons: !this.state.showPersons
    })
    console.log("this.state.showPersons : " + this.state.showPersons)
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] Inside render()');
    const cssClasses = appCssClasses;
    return (
      <div id="App" className={appCssClasses.App}>
        <Cockpit {...this.state} appCssClasses={cssClasses}
          deletePersonHandler={this.deletePersonHandler}
          togglePersonsHandler={this.togglePersonsHandler}
          nameChangedHandler={this.nameChangedHandler}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default App;
