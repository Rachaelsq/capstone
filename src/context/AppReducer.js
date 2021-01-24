export default (state, action) => {
    switch (action.type) {
        case "REMOVE_MEDICINE":
            return {
            ...state,
            medicines: state.medicines.filter(
            (medicine) => medicine.id !== action.payload
            )
        };
        case "ADD_MEDICINES":
            return {
            ...state,
/*             medicines: [action.payload, ...state.medicines]*/
            medicines: [...state.medicines, action.payload]    
};
        case "EDIT_MEDICINE":
        const updatedMedicine = action.payload;

        const updatedMedicines = state.medicines.map((medicine) => {
            if (medicine.id === updatedMedicine.id) {
            return updatedMedicine;
            }
            return medicine;
            });

        return {
            ...state,
            medicines: updatedMedicines
        };
        default:
            return state;
    }
};