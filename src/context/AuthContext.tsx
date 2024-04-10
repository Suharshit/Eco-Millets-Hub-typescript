import { createContext, useState, useContext } from 'react';
import authservice from '../appwrite/auth';

const AuthContext = createContext(null);

export const AuthProvider = () => {
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [isLoading, setISLoading] = useState(null)

    const value = {
        authUser,
        setAuthUser,
        isLoading,
        setISLoading,
        isLoggedIn,
        setIsLoggedIn
    }

    return(
        <AuthContext.Provider value={value}></AuthContext.Provider>
    )
}