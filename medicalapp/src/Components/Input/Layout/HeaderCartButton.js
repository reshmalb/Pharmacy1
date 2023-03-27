import React,{useContext,useState,useEffect} from 'react';
import MedicineContext from '../../../Store/MedicineContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=(props)=>{
    const [btnHighlighted,setBtnHighlighted]=useState(false)
    
    const cartCtx = useContext(MedicineContext);

    const numberOfCartItems  = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.quantity;
    },0);
    const {items}=cartCtx;

    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setBtnHighlighted(true);
        const timer=setTimeout(() => {
            setBtnHighlighted(false)
            
        }, 300);
        return ()=>{
            clearTimeout(timer);
        }

    },[items])

 const btnClasses=`${classes.button} ${btnHighlighted ? classes.bump :''}`;
    return ( 
        <button className={btnClasses} onClick={props.onClick}>
            {/* <span className={classes.icon}> <CartIcon/></span> */}
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    )
}

export default HeaderCartButton;