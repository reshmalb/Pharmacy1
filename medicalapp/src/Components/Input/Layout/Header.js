import React ,{Fragment}from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header=props=>{ 
   return(
    <Fragment>
        <header className={classes.header}>
            <h1>Admin Page</h1>
         
           <HeaderCartButton onClick={props.onShowCart}>Show Cart</HeaderCartButton> 
        </header>
            {/* <div className={classes['main-image']}>
                <img src={mealsImage} alt="delicious food"></img>            
            </div> */}
    </Fragment> 
   )
       
}
export default Header;