// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';

const AuthContext = createContext(null)

const AuthProvider = () => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;