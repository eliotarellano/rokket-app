import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Context from './context/Context';
import theming from './assets/js/theme';
import Home from './containers/home/Home';
import store from './store';

const App = () => {
    const [lsTheme, setLsTheme] = useState(window.localStorage.getItem('theme'));
    const theme = lsTheme;

    // checks the theme value and toggle it

    const toggleTheme = (event) => { 
        if (theme === 'light') {
            setLsTheme('dark');
        } else if (theme === 'dark') {
            setLsTheme('light');
        }
    }

    // effect hook that defines the theme simulating the componentDidMount method

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

    // const that store the theme value and the toggle function to be setted in context

    const contextData = {
        theme: theme,
        toggle: toggleTheme
    };

    // defines the theme globally sending the theme value

    theming(theme);

    // returning component with context and store providers

    return (
        <div className="app">
            <Context.Provider value={contextData}>
                <Provider store={store}>
                    <Home />
                </Provider>
            </Context.Provider>
        </div>
    );
}

export default App;
