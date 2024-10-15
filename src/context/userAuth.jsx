import { createContext, useState } from 'react';
import AppRouter from '../routes/appRoutes';
export const AuthContext = createContext({
    accessToken: null,
    isLoggedIn: false,
    setAccessToken: () => { },
    setIsLoggedIn: () => { }
});

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('access');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const login = (accessToken) => {
        setAccessToken(accessToken);
        setIsLoggedIn(true);
        console.log(accessToken);
        
        // Store the access token in local storage or session storage
        // localStorage.setItem('accessToken', accessToken); // Or sessionStorage.setItem('accessToken', accessToken)
    };

    const logout = () => {
        setAccessToken(null);
        setIsLoggedIn(false);
        console.log(accessToken);
        
        // Remove the access token from local storage or session storage
        // localStorage.removeItem('accessToken'); // Or sessionStorage.removeItem('accessToken')
    };

    const contextValue = {
        accessToken,
        setAccessToken,
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;