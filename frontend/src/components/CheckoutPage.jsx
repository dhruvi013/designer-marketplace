import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const handlePlaceOrder = () => {
    if (paymentMethod === 'razorpay') {
      // Razorpay logic here
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // replace with your key
        amount: 12500, // in paisa = ₹125.00
        currency: 'INR',
        name: 'Digital Marketplace',
        description: 'Fashion Order Payment',
        handler: function (response) {
          alert(`Payment Successful! Razorpay Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert(`Selected Payment Method: ${paymentMethod}`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-40">
      {/* Billing Information */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          <input type="text" placeholder="City" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          <input type="text" placeholder="ZIP / Postal Code" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
        </form>

        {/* Payment Options */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="payment" value="razorpay" checked={paymentMethod === 'razorpay'} onChange={(e) => setPaymentMethod(e.target.value)} />
              <span className="ml-2">Razorpay</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
              <span className="ml-2">Cash on Delivery</span>
            </label>
            {/* <label className="flex items-center">
              <input type="radio" name="payment" value="stripe" checked={paymentMethod === 'stripe'} onChange={(e) => setPaymentMethod(e.target.value)} />
              <span className="ml-2">Stripe (Coming Soon)</span>
            </label> */}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$120.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$125.00</span>
          </div>
        </div>
        <button
          className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
