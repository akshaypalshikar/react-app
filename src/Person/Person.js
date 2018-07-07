import React from 'react';
import Person from './Person.css';

const person = (props) => {
console.log(props);
return (
    <div className="Person" onClick={props.clicked}>
        <p> I'm a {props.name} and I am {props.age} years old!</p>
    </div>
);
}

export default person;