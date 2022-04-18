import React from 'react';
import CheckOutDetails from '../CheckOutDetails/CheckOutDetails';
import Hook from '../Hook/Hook';
import './CheckOut.css'

const Checkout = () => {
    const [details, setDetails] = Hook();
   
  
     
    return (
        <div className='form-containers'>
     <h2>Checkout page</h2>
    <div className='form-contained'>
    {
         details.slice(0, 1).map( detail => <CheckOutDetails key={detail.id} detail={detail}></CheckOutDetails> )
    }
</div>


</div>
    );
};
export default Checkout;