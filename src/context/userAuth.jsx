// import { createContext, useState } from 'react';
// import AppRouter from '../routes/appRoutes';
// const AuthContext = createContext();



// const AuthProvider = ({ children }) => {
//     // const [accessToken, setAccessToken] = useState('access');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);


//     const login = () => {
//         // setAccessToken(accessToken);
//         setIsLoggedIn(true);
//         // console.log(accessToken);
        
//         // Store the access token in local storage or session storage
//         // localStorage.setItem('accessToken', accessToken); // Or sessionStorage.setItem('accessToken', accessToken)
//     };

//     const logout = () => {
//         // setAccessToken(null);
//         setIsLoggedIn(false);
//         // console.log(accessToken);
        
//         // Remove the access token from local storage or session storage
//         // localStorage.removeItem('accessToken'); // Or sessionStorage.removeItem('accessToken')
//     };

//     // const contextValue = {
//         // accessToken,
//         // setAccessToken,
//         // isLoggedIn,
//         // setIsLoggedIn,
//         // login,
//         // logout,
//     // };

//     return (
//         <AuthContext.Provider value={{isLoggedIn, login, logout}}>
//             {<AppRouter/>}
//         </AuthContext.Provider>
//     );
// };

// export  {AuthContext,AuthProvider};

import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [users, setUsers] = useState(null)


    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, users, setUsers }} >
            
                {children}
            
        </AuthContext.Provider>


    )

};
export { AuthContext, AuthProvider };