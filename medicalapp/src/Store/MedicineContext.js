import React from "react";

const MedicineContext=React.createContext({
    items:[],
    addMedicine:(item)=>{},
    removeMedicine:(id)=>{},
})

export default MedicineContext;