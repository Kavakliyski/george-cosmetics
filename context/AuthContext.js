// react
import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

// firebase
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import auth from '../firebase'


export const UserContext = createContext();


// main
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // sign in existing user
    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    return (
        <UserContext.Provider value={{ createUser, signinUser }}>
            {children}
        </UserContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(UserContext)
}