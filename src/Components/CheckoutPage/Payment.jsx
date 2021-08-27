import React from 'react'
import GooglePayButton from '@google-pay/button-react';
export const Payment = () => {
    return (
        <div className="App">
        <h1><img src="" className="App-logo" alt="logo" /> Google Pay React Demo</h1>
        <hr />
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '12345678901234567890',
              merchantName: 'Demo Merchant',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '1',
              currencyCode: 'USD',
              countryCode: 'US',
            },
            shippingAddressRequired: true,
            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
          }}
          onLoadPaymentData={paymentRequest => {
            console.log('Success', paymentRequest);
          }}
          onPaymentAuthorized={paymentData => {
              console.log('Payment Authorised Success', paymentData)
              return { transactionState: 'SUCCESS'}
            }
          }
          onPaymentDataChanged={paymentData => {
              console.log('On Payment Data Changed', paymentData)
              return { }
            }
          }
          existingPaymentMethodRequired='false'
          buttonColor='black'
          buttonType='Buy'
        />
      </div>
      
    )
}
