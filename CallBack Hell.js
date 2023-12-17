/CALLBACK HELL: Nested Callbacks

/* Ecommerce
   1. Create Order
   2. Proceed to Payment
   3. Show Payment Summary
   4. Update Wallet
*/

const cart=["shirt","pant","kurta"];

api.createOrder(cart,function(){
    
    api.proceedToPayment(function(){

        api.showPaymentSummary(function(){

            api.updateWallet()
        })
    })
});

// Callback hell forms Pyramid of Dome

