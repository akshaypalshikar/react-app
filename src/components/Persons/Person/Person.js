import React, { Component } from 'react';
import cssClasses from './Person.css';
import withClass from './../../../hoc/withClass';
import Wrapper from './../../../hoc/Wrapper';


class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);

    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Wrapper>
                <div className={cssClasses.Person}>
                    <p onClick={this.props.clicked}> I'm a {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </Wrapper>
        );
    }
}

export default withClass(Person,cssClasses.Person);