import React, { useState } from 'react';
import './App.css';
import Context from './context/Context';
import { theming } from './assets/js/theme';
import Home from './containers/home/Home';
import ThemeToggler from './components/theme-toggler/ThemeToggler';

const App = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme'));

    const toggleTheme = () => {        
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('light');
        }
    }

    const contextData = {
        theme: theme
    };

    theming(theme);

    return (
        <div className="app">
            <Context.Provider value={contextData}>
                <Home />
                <ThemeToggler toggle={toggleTheme} />
            </Context.Provider>
        </div>
    );
}

export default App;
