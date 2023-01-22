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


const UserContext = createContext();


// main
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // sign in existing user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log('currnet user', currentUser)
            // console.log('user', user)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    // checks if the user is authenticated or not

    return (
        <UserContext.Provider value={{ createUser, signInUser, user, logout }}>
            {children}
        </UserContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(UserContext)
}