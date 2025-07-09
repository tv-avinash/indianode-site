import React from 'react';

const RazorpayButton = () => {
  return (
    <form>
      <script
        src="https://checkout.razorpay.com/v1/payment-button.js"
        data-payment_button_id="pl_Qr3mbIECabKEfb"
        async>
      </script>
    </form>
  );
};

export default RazorpayButton;
