import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//start by setting the initial state
const initialState = {
medicines: [
    {
    id: 1,
    name: "daily multivitamin",
    directions: "take with water",
    }
]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export default GlobalProvider;







/* 
    const [state, dispatch] = useReducer(AppReducer, initialState);



function removeMedicine(id) {
    dispatch({
        type: "REMOVE_MEDICINEINFO",
        payload: id
    });
    }

function addMedicine(medicineInfo) {
    dispatch({
        type: "ADD_MEDICINEINFO",
        payload: medicineInfo
    });
    }

function editMedicine(medicineInfo) {
    dispatch({
        type: "EDIT_MEDICINEINFO",
        payload: medicineInfo
    });
}

return (
    <GlobalContext.Provider
        value={{
        medicineInfo: state.medicines,
        removeMedicine,
        addMedicine,
        editMedicine
        }}
    >
        {children}
    </GlobalContext.Provider>
);
};
 */