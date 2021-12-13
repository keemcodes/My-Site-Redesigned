import { useState, useEffect, createContext } from 'react';
import { Navigate } from 'react-router-dom'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        fetch('/api/auth/user_data')
            .then(response => {
                if (response.email) {
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }
            })
    }

    const logout = async () => {
        fetch("/api/auth/logout")
          .then(() => {
            setIsAuth(false);
            return <Navigate to='/' />
          })
          .catch(err => console.log(err));
      };

    return <AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth, logout }}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthProvider}