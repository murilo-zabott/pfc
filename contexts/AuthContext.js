import Router from 'next/router'
import axios from 'axios'
import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
   
    let isAuthenticated = (!!user)

    const login = async (credentials) => {
        const userData = (await axios.post("/api/login", credentials, {
            headers: {
                "Content-Type": "application/json"
            },
        })).data

        if (!!userData){
            setUser(userData)
            Router.push(userData.isAdm ? '/admin' : '/cliente')
            return true
        }
        
        return false
    }

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated,login }}>
            {children}
        </AuthContext.Provider>
    )
}