import React from 'react';
import Person from './Person/Person'
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary';

const persons = (props) =>  (
        <div id="persons">
        {props.persons.map((person,index)=>{
         return (
         <ErrorBoundary key={person.id} >
             <Person {...person} 
                clicked={()=>props.deletePersonHandler(index)}
                changed={event=>props.nameChangedHandler(event,person.id)}/>
      
          </ErrorBoundary>);
          
        })}
      </div>
  );

export default persons;