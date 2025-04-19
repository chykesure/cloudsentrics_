import React, { useState } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

const EnrollForm = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    const res = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 2500 }) // $25.00
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: { name: formData.fullName },
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert("✅ Payment Successful!");
        onClose();
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl p-6 rounded-md relative overflow-y-auto max-h-[90vh]">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>×</button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Step 1: Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['fullName', 'email', 'phone', 'country'].map(field => (
                <div key={field}>
                  <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-black"
                  />
                </div>
              ))}
            </div>
            <button className="mt-6 w-full bg-green-600 text-white p-2 rounded" onClick={() => setStep(2)}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Step 2: Course & Payment</h2>
            <select name="course" value={formData.course} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded text-black">
              <option value="">Select Course</option>
              <option value="AWS">AWS</option>
              <option value="DevSecOps">DevSecOps</option>
              <option value="Azure">Azure</option>
            </select>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded text-black">
              <option value="">Select Payment Option</option>
              <option value="one-time">One-time</option>
              <option value="installment">Installment</option>
            </select>
            <button className="w-full bg-green-600 text-white p-2 rounded" onClick={() => setStep(3)}>Next</button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4">Step 3: Payment</h2>
            <div className="border border-gray-300 rounded p-4 mb-4">
              <CardElement
                options={{
                  style: {
                    base: { fontSize: '16px', color: '#000' },
                    invalid: { color: '#e53e3e' },
                  },
                }}
              />
            </div>
            <button className="w-full bg-green-600 text-white p-2 rounded" onClick={handlePayment}>Pay $25</button>
          </>
        )}
      </div>
    </div>
  );
};

const EnrollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Elements stripe={stripePromise}>
      <EnrollForm onClose={onClose} />
    </Elements>
  );
};

export default EnrollModal;
