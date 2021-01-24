import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 

//start by setting the initial state
const initialState = {
    medicines: [
    {
        id: 1,
        name: "Ishan Manandhar",
        directions: "Frontend Dev"
    }
    ]
};

  //create context
export const GlobalContext = createContext(initialState);
  //provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeMedicine(id) {
        dispatch({
            type: "REMOVE_MEDICINE",
            payload: id
        });
    }
    //this might have to be ADD_MEDICINE or S instead
    function addMedicine(medicines) {
        dispatch({
            type: "ADD_MEDICINE",
            payload: medicines
        });
    }

    function editMedicine(medicines) {
        dispatch({
            type: "EDIT_MEDICINE",
            payload: medicines
        });
    }
    return (
    <GlobalContext.Provider
            value={{
            medicines: state.medicines,
            removeMedicine,
            addMedicine,
            editMedicine
        }}
    >
        {children}
    </GlobalContext.Provider>
    );
};

/* 
===========
ADD
===========
  */