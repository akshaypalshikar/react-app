import React, { Component } from 'react';
import Person from './Person/Person'
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }
  render() {
    console.log('[Persons.js] Inside render()');
    return (<div id="persons">
      {this.props.persons.map((person, index) => {
        return (
          <ErrorBoundary key={person.id} >
            <Person {...person}
              clicked={() => this.props.deletePersonHandler(index)}
              changed={event => this.props.nameChangedHandler(event, person.id)} />

          </ErrorBoundary>);

      })}
    </div>);
  }
}

export default Persons;