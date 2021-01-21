export default (state, action) => {
switch (action.type) {
/* 
========
REMOVE
========
*/
    case "REMOVE_MEDICINEINFO":
        return {
            ...state,
            medicines: state.medicines.filter(
            (medicine) => medicine.id !== action.payload
            )
        };
/* 
========
ADD
========
*/
    case "ADD_MEDICINEINFO":
        return {
            ...state,
            medicines: [...state.medicines, action.payload]
        };
/* 
========
EDIT
========
*/
    case "EDIT_MEDICINEINFO":
        const updatedMedicine = action.payload;

        const updatedMedicines = state.medicines.map((medicine) => {
            if (medicine.id === updatedMedicine.id) {
                return updatedMedicine;
            }
            return medicine;
            });
/* 
========
NEW LIST OF MEDICINES
========
*/
        return {
            ...state,
            medicines: updatedMedicines
        };
        default:
            return state;
    }
};  