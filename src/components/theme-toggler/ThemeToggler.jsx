import React, { useContext } from 'react';
import './ThemeToggler.scss';
import {
    Button
} from 'reactstrap';
import Context from '../../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
 
const ThemeToggler = (props) => {
    // getting global theme

    const themeContext = useContext(Context);

    // returning component

    return (
        <div className="theme-toggler">
            <Button
                color="tranparent"
                className="theme-toggler-button"
                onClick={themeContext.toggle}>
                <FontAwesomeIcon 
                    color={ 
                        themeContext.theme === 'light' 
                        ? 'black' 
                        : 'white' 
                    }
                    icon={ 
                        themeContext.theme === 'light' 
                        ? faMoon 
                        : faSun 
                    }
                />
            </Button>
        </div>
    )
}

export default ThemeToggler;