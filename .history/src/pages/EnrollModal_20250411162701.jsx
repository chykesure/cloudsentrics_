import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

const EnrollForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    paymentMethod: '',
    cardDetails: '',
  });

  // Handle changes for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Move to the next step of the form
  const handleSubmitStep1 = () => setStep(2);
  const handleSubmitStep2 = () => setStep(3);

  const stripe = useStripe();
  const elements = useElements();

  // Handle payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const res = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 25028 }),
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formData.fullName,
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert("✅ Payment Successful!");
        onClose();
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-xl relative overflow-auto">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700"
          onClick={onClose}
        >
          ×
        </button>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Step 1: Personal Details</h2>

            <div className="mb-6">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-black focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="country" className="block text-sm font-medium text-gray-600 mb-2">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select Country</option>
                {/* Add country options */}
              </select>
            </div>

            <button
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
              onClick={handleSubmitStep1}
            >
              Next
            </button>
          </>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Step 2: Course & Payment Option</h2>

            <div className="mb-6">
              <label htmlFor="course" className="block text-sm font-medium text-gray-600 mb-2">Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select Course</option>
                <option value="AWS ">AWS</option>
                <option value="DevSecOps">DevSecOps</option>
                <option value="Azure">Azure</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-600 mb-2">Payment Option</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select Payment Option</option>
                <option value="one-time">One-time payment</option>
                <option value="installment">Installment plan</option>
              </select>
            </div>

            <button
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
              onClick={handleSubmitStep2}
            >
              Next
            </button>
          </>
        )}

        {/* Step 3: Payment Details */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Step 3: Payment</h2>

            <div className="mb-6">
              <label htmlFor="cardDetails" className="block text-sm font-medium text-gray-600 mb-2">Card Details</label>
              <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#1f2937',
                        '::placeholder': { color: '#9ca3af' },
                      },
                      invalid: {
                        color: '#e53e3e',
                      },
                    },
                  }}
                />
              </div>
            </div>

            <button
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
              onClick={handlePaymentSubmit}
            >
              Submit Payment
            </button>
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
