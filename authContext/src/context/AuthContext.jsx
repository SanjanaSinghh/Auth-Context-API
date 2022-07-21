import React, {  useState } from 'react'
import { useEffect } from 'react';
import {createContext} from 'react'

// This gives some Memory
export const AuthContext = createContext();

// This is the raper
export const AuthContextProvider = ({children}) => {
    const [token,setToken] = useState("")
    
    const value = {
        token,
        setToken,
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}