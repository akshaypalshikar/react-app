import React from 'react';
import Person from './Person.css';

const person = (props) => {
console.log(props);
return (
    <div className="Person">
        <p> I'm a {props.name} and I am {props.age} years old!</p>
    </div>
);
}

export default person;