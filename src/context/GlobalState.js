import React, { createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    users: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer,  initialState);

    // CRUD ACTIONS
    // !DELETE
    const removeUser = (id) => {
        dispatch({
            type:'REMOVE_USER',
            payload: id
        })
    }

    // !CREATE
    const addUser = (user) => {
        dispatch({
            type:'ADD_USER',
            payload: user
        })
    }

    // !EDIT
    const editUser = (user) => {
        dispatch({
            type:'EDIT_USER',
            payload: user
        
        })
    }
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser, 
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}