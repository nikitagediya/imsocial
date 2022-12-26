import { createContext, useEffect, useState } from "react";
import userlogo from '../components/images/login.jpg';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState( JSON.parse(localStorage.getItem("user")) || null 
    );

    const login = () => {
        // TO DO
        setCurrentUser({
            id: 1,
            name: "nikita gediya",
            profilePic: "<img src={userlogo} ></img>"
        });
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]); 

    return  (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )
};


// background-image: url(/src/components/images/user.jpg);