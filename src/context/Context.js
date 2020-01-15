import { createContext } from 'react';

// context and data definition

const Context = createContext({
    theme: '',
    toggler: null,
});

export default Context;