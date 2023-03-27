import React, { useContext } from "react";
import MedicineContext from "../Store/MedicineContext";
import classes from './BillCart.module.css'
import Modal from "../UI/Modal";
const BillCart=(props)=>{
  
    const medCtx=useContext(MedicineContext);
    const data=medCtx.items;

    const addItemToCartHandler=(item)=>{
        medCtx.addMedicine({...item,quantity:1})
    }
    const removeItemFromCartHandler=(id)=>{
        medCtx.removeMedicine(id)
    }
    const cartList= <ul className={classes['cart-items']}>
        {data.map((item)=><li key={item.id}>
         <span>{item.medicineName}</span>
         <span>{item.description}</span>
         <span>{item.price}</span>
         <span>x{item.quantity}</span>
         <button type="click" onClick={addItemToCartHandler.bind(null,item)}>+</button>
         <button type="click" onClick={removeItemFromCartHandler.bind(null,item.id)}>-</button>
     </li>)}</ul>  

    return(
        <Modal onClose={props.onClose}>
            {cartList}
            <button  onClick={props.onClose}>Close</button>
            <button>Order</button>
      </Modal>
    )

}
export default BillCart;