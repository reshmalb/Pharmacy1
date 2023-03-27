
import { Fragment,useState } from 'react';
import './App.css';
import MedicineForm from './Components/Input/MedicineForm';
import MedicineProvider from './Store/MedicineProvider';
import BillCart from './Cart/BillCart';
import Header from './Components/Input/Layout/Header';

function App() {
  const [showCart,setShowCArt]=useState(false)
 const showCartHandler=()=>{
     setShowCArt(true);
 }
 const hideCartHandler=()=>{
  setShowCArt(false);
}

  return (
  <MedicineProvider>
          { showCart && <BillCart onClose={hideCartHandler} /> } 
      <Header onShowCart={showCartHandler}/>
     <main>
     <MedicineForm />  

     </main>
       
        
    </MedicineProvider>
 
  );
}

export default App;
