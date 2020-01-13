import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Context from './context/Context';
import theming from './assets/js/theme';
import Home from './containers/home/Home';
import ThemeToggler from './components/theme-toggler/ThemeToggler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import store from './store';

const App = () => {
    const [lsTheme, setLsTheme] = useState(window.localStorage.getItem('theme'));
    const theme = lsTheme;

    const toggleTheme = () => {     
        if (theme === 'light') {
            setLsTheme('dark');
        } else if (theme === 'dark') {
            setLsTheme('light');
        }
    }

    useEffect(() => {
        if ( theme ) {
            if (theme === 'light') {
                setLsTheme('light');
            } else if (theme === 'dark') {
                setLsTheme('dark');
            }
        } else {
            setLsTheme('light');
        }
    },[]);

    const contextData = {
        theme: theme
    };

    theming(theme);

    return (
        <div className="app">
            <Context.Provider value={contextData}>
                <ThemeToggler theme={theme} toggle={toggleTheme} />
                <Provider store={store}>
                    <Home />
                </Provider>
            </Context.Provider>
        </div>
    );
}

export default App;
