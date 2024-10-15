import { createContext, useState } from 'react';
import AppRouter from '../routes/appRoutes';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('access');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const login = (accessToken) => {
        setAccessToken(accessToken);
        setIsLoggedIn(true);
        // Store the access token in local storage or session storage
        // localStorage.setItem('accessToken', accessToken); // Or sessionStorage.setItem('accessToken', accessToken)
    };

    const logout = () => {
        setAccessToken(null);
        setIsLoggedIn(false);
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
        {<AppRouter/>}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };