import React from 'react';
import './ThemeToggler.css';

const ThemeToggler = (props) => {
    return (
        <div>
            <button onClick={props.toggle}>toggle!</button>
        </div>
    )
}

export default ThemeToggler;