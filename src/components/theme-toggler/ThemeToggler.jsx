import React from 'react';
import './ThemeToggler.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
 
const ThemeToggler = (props) => {
    return (
        <div className="theme-toggler">
            <div className="theme-toggler-container" onClick={props.toggle}>
                <div className="theme-toggler-button">
                    <FontAwesomeIcon 
                        color="white" 
                        icon={ 
                            props.theme === 'light' 
                            ? faMoon 
                            : faSun 
                        } 
                    />
                </div>
            </div>
        </div>
    )
}

export default ThemeToggler;