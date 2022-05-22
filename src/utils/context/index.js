import React, { useState } from 'react'

export const User = React.createContext()

export const UserContext = ({ children }) => {
    const [userData, setUserData] = useState()

    const value = {
        userData,
        setUserData
    };
    return <User.Provider value={value}>{children}</User.Provider>
}