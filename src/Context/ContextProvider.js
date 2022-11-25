import React, { createContext } from 'react';
import app from '../firebase.config';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

export const authContext = createContext(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {




    const authInfo = {};
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default ContextProvider;