import React,{useReducer} from "react";
import MedicineContext from "./MedicineContext";

 const defaultMedicineState={
    items:[],
    
 };
  const medicineReducer=(state,action)=>{


    if(action.type==='ADD-MEDICINE'){  
          
        let updatedItems;
          const existingItemIndex=state.items.findIndex((item)=>
            item.id===action.items.id
          )
          const existingItem=state.items[existingItemIndex];          
          console.log("id && item",existingItemIndex,existingItem)
             
              if(existingItem){
                 const updatedItem={...existingItem,
                      quantity:existingItem.quantity+action.items.quantity                    
                       }
                       console.log(updatedItem)
                updatedItems=[...state.items]
                updatedItems[existingItemIndex]=updatedItem;
                console.log("inside updateditems",updatedItems)

                }            
            
              else {
                updatedItems=state.items.concat(action.items);
              }
              return{
                items:updatedItems
              }
        }    

    
    if(action.type ==='REMOVE-MEDICINE'){
            console.log("id",action.ids);
            const existingItemIndex = state.items.findIndex((item)=>
                 item.id === action.ids);
             const existingItem=state.items[existingItemIndex];
             console.log("exitem",existingItem ,existingItemIndex)

            let updatedItems;
            if(existingItem){
            const updatedItem={...existingItem,
                 quantity:existingItem.quantity-1}
            updatedItems={...state.items}
            updatedItems[existingItemIndex]=updatedItem;
            console.log("updateditems",updatedItems)

               return{
                      items:updatedItems
                     }

          }
            else{
                return{
                       items:state.items
                      }
                 }
      }
  
     return defaultMedicineState;
  }

  
const MedicineProvider=(props)=>{

 const[medicineState,dispatchMedicine]= useReducer(medicineReducer,defaultMedicineState)

const addMedicineToList=(item)=>{
  console.log(item)
    dispatchMedicine({type:'ADD-MEDICINE',items:item})
}
const removeMedicineFromList=(id)=>{
    dispatchMedicine({type:'REMOVE-MEDICINE',ids:id})

}




    const medicineContext={
      items:medicineState.items,
     
      addMedicine:addMedicineToList,
      removeMedicine:removeMedicineFromList, 
   

    }
    return(
        <MedicineContext.Provider value={medicineContext}>
                {props.children}
        </MedicineContext.Provider>)
    
}

export default MedicineProvider;