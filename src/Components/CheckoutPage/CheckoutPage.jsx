import React, { useEffect, useState } from 'react'
import "../Authorization/Auth-page.css";
import { CheckoutLoading } from './CheckoutLoading';
export const CheckoutPage = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      let timer = setTimeout(() => {
        setLoading(true);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);


    
    return isLoading ? <CheckoutLoading/> :
       ( <div>
            sdsd
        </div>
    )
}
