import React, { useContext,useState } from  'react';
import MedicineContext from '../../Store/MedicineContext';
import classes from './MedicalForm.module.css'
import Card from '../../UI/Card';

const MedicineForm=props=>{
    const medCtx=useContext(MedicineContext);

    
    const[inputmedName,setMedName]=useState('');
    const[inputdescription,setDescription]=useState('');
    const [inputPrice,setPrice]=useState('');
    const [inputQuantity,setQuantity]=useState('');
    const [medicineList,setMedicineList]=useState([])
    const [buttonMessage,setButtonMessage]=useState('Add to Bill')
      const onNameHandler=(event)=>{
        setMedName(event.target.value)
    }
    const onDescriptionHandler=(event)=>{
        setDescription(event.target.value)
    }
    const onPriceHandler=(event)=>{
        setPrice(event.target.value)
    }
    const onQuantityHandler=(event)=>{
        setQuantity(event.target.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        
        setMedicineList((prevList)=>
        { return[...prevList,
            {id:Math.random().toString(),
          medicineName:  inputmedName,
          description: inputdescription,
          price: +inputPrice,
          quantity: +inputQuantity}]})     
        // medCtx.addMedicine({
        //     id:Math.random().toString(),
        //     medicineName:  inputmedName,
        //     description: inputdescription,
        //     price: +inputPrice,
        //     quantity: +inputQuantity
        // })
        setDescription('');
        setMedName('');
        setPrice('');
        setQuantity('');    
    }

    const addToCartHandler=(item)=>{
        medCtx.addMedicine({
            id:item.id,
            medicineName:item.medicineName,
            description:item.description,
            price:item.description,
            quantity:1
          })

      medicineList.map((value)=>{
        if(value.id===item.id){
          value.quantity=value.quantity-1;
         
        
            return;
        }
      })
    }
    const  hasItems=medicineList.length>0; 

        
     
   

    

   return(
   <div>
            <form className={classes.form} onSubmit={onSubmitHandler}>
            <label htmlFor='medicine' >Medicine Name:</label>
            <input type="text" id='medicine' value={inputmedName} onChange={onNameHandler}></input>
            <label htmlFor='description'>Description:</label>
            <input type="text" id="description" value={inputdescription} onChange={onDescriptionHandler}></input>
            <label htmlFor='price'>Price:</label>
            <input type="number" id="price" value={inputPrice}              
                onChange={onPriceHandler}></input> 
            <label htmlFor='quantity'>Quantity Available:</label>
            <input type="number" id="quantity" value={inputQuantity} onChange={onQuantityHandler}></input>
            <button type="submit"> Add products</button>
            </form>
           <Card>
           {hasItems && <ul >
                { medicineList.map((item)=>
                 <li  className={classes['cart-item']} key={item.id}  
                           id={item.id}>  
                 <div className={classes.summary}>
                    <span className={classes.price}>Medicine: {item.medicineName}</span>      
                     <span className={classes.price}>
                       Description: {item.description} </span>
                       <span className={classes.price}>Price: {item.price}</span>
                      <span className={classes.amount}>Quantity:{item.quantity}</span>

          
                 <button type="submit"onClick={addToCartHandler.bind(null,item) } >Add to Bill</button>
                </div>
          </li> )}
      </ul> }   
            </Card> 
                             

      </div> 
   )

}
export default MedicineForm;