import React, { PureComponent } from 'react';
import appCssClasses from './App.css';
import Cockpit from './../components/Cockpit/Cockpit';
import Wrapper from './../hoc/Wrapper';
import withClass from './../hoc/withClass';

export const AuthContext = React.createContext(false);


class App extends PureComponent {
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
    return this.state.persons!==nextState.persons || this.state.showPersons!==nextState.showPersons 
    || this.state.isAuthenticated!==nextState.isAuthenticated;
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
    showPersons: true,
    toggleClickCounter:0,
    isAuthenticated : false
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
 /*    this.setState({
      showPersons: !this.state.showPersons
    }) */
    this.setState((prevState,props)=>{
      return {
        showPersons:!prevState.showPersons,
        toggleClickCounter:prevState.toggleClickCounter+1
      }
    });

    console.log("this.state.showPersons : " + this.state.showPersons)
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  loginHandler = () =>{
    this.setState({isAuthenticated:true});
  }

  render() {
    console.log('[App.js] Inside render()');
    const cssClasses = appCssClasses;
    return (
      <Wrapper>
        <button onClick={()=>this.setState({showPersons:true})}>Show Persons</button>
        <AuthContext.Provider value={this.state.isAuthenticated}>
          <Cockpit {...this.state} appCssClasses={cssClasses}
            deletePersonHandler={this.deletePersonHandler}
            togglePersonsHandler={this.togglePersonsHandler}
            nameChangedHandler={this.nameChangedHandler}
            title={this.props.title}
            login={this.loginHandler}
          />
        </AuthContext.Provider>
      </Wrapper>
    );
  }
}

export default withClass(App,appCssClasses.App);
