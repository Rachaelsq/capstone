import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 

//start by setting the initial state
const initialState = {
    medicines: [
    {
        id: 1,
        name: "Daily Multivitamin",
        directions: "Take once a day with 2 glasses of water"
        
    },
    {
        id: 2,
        name: "Herbal capsule",
        directions: "Take once a day with food"
        
    },
    {
        id: 3,
        name: "Tincture",
        directions: "1 drop a day, 3x a day."
        
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