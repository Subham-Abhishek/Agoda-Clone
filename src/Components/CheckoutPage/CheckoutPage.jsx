import React, { useEffect, useState } from 'react'
import "../Authorization/Auth-page.css";
import { CheckoutLoading } from './CheckoutLoading';
import { ConfirmLoading } from './ConfirmLoading';
export const CheckoutPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [isremind, setRemind] = useState(false);

    useEffect(() => {
      setLoading(true);
      let timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      let timer2 = setTimeout(() => {
        setRemind(true);
      }, 8000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }, []);


    
    return isLoading ? <CheckoutLoading/> :
       (
         <> 
        <div>
            sdsd
        </div>
        {isremind && <ConfirmLoading setRemind={setRemind}/>}
        </>
    )
}
