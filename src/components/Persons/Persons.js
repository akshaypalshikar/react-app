import React, { PureComponent } from 'react';
import Person from './Person/Person'
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();

  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()',nextProps);
  }

/*   shouldComponentUpdate(nextProps,nextState){
    console.log('[UDPATE Persons.js] Inside shouldComponentUpdate()',nextProps,nextState);
    return nextProps.persons!== this.props.persons;
  }
 */
  componentWillUpdate(nextProps, nextState){
    console.log('[UDPATE Persons.js] Inside componentWillUpdate()',nextProps,nextState);
  }

   componentDidUpdate(){
    console.log('[UDPATE Persons.js] Inside componentDidUpdate()',this.props,this.State);
   }

  render() {
    console.log('[Persons.js] Inside render()');
    return (<div id="persons">
      {this.props.persons.map((person, index) => {
        return (
          <ErrorBoundary key={person.id} >
            <Person {...person}
              forwardedRef = {this.lastPersonRef}
              clicked={() => this.props.deletePersonHandler(index)}
              changed={event => this.props.nameChangedHandler(event, person.id)} 

              position={index}  />

          </ErrorBoundary>);

      })}
    </div>);
  }
}

export default Persons;