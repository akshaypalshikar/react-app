import React, { Component } from 'react';
import cssClasses from './Person.css';
import withClass from './../../../hoc/withClass';
import Wrapper from './../../../hoc/Wrapper';
import PropTypes from 'prop-types';


class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);

    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()',this.inputElement.position);
        if(this.props.position===0){
            this.inputElement.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Wrapper>
                <div className={cssClasses.Person}>
                    <p onClick={this.props.clicked}> I'm a {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" ref={(inputElement)=>this.inputElement=inputElement}
                    onChange={this.props.changed} 
                    value={this.props.name}
                    position={this.props.position} />
                </div>
            </Wrapper>
        );
    }
}

Person.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    clicked : PropTypes.func,
    changed : PropTypes.func

}

export default withClass(Person,cssClasses.Person);