// src/Pages/QRCodeScannerPage/gpayConfig.js

export const gpayConfig = {
  environment: 'TEST', // Use 'PRODUCTION' for live transactions
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [{
    type: 'UPI', // UPI-based payment
    parameters: {
      // No need for card-related parameters for UPI
    },
    tokenizationSpecification: {
      type: 'DIRECT', // Typically used for UPI, without gateway details
      parameters: {
        // No tokenization parameters needed for UPI with 'DIRECT'
      }
    }
  }],
  merchantInfo: {
    merchantId: '12345678910', // Replace with your actual merchant ID
    merchantName: 'abc' // Replace with your actual merchant name
  },
  transactionInfo: {
    totalPriceStatus: 'FINAL',
    totalPrice: '10.00', // Adjust as necessary
    currencyCode: 'USD' // Adjust the currency based on your region
  }
};
