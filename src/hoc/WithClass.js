import React from 'react';

const withClass = (props) => (
    <div className={props.cssClasses}>
        {props.children}
    </div>
);

export default withClass;