import React from 'react';
import Persons from './../Persons/Persons'
import cockpitCssClasses from './Cockpit.css'
import Wrapper from '../../hoc/Wrapper';

const cockpit = (props) => {
    let btnClass = cockpitCssClasses.Button;
    let persons = [];
    if(props.showPersons){
        persons = (<Persons persons={props.persons}      
          deletePersonHandler = {props.deletePersonHandler}
          nameChangedHandler = {props.nameChangedHandler}
          isAuthenticated = {props.isAuthenticated}
        />);
        btnClass = [cockpitCssClasses.Button,cockpitCssClasses.Red].join(' ');
    }

    const assignedCssClasses = [];
    if(props.persons.length<=2){
      assignedCssClasses.push(cockpitCssClasses.red);
    }
    if(props.persons.length<=1){
      assignedCssClasses.push(cockpitCssClasses.bold);
    }

    return (
        <Wrapper>
            <h1>{props.title}</h1>
            <p className={assignedCssClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.togglePersonsHandler.bind(this)}>Toggle Persons</button>
            <button onClick={props.login}>Login</button>
            {persons}
        </Wrapper>
    )};

export default cockpit;