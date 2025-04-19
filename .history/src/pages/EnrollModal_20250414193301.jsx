import React, { useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FaArrowLeft } from 'react-icons/fa';

const stripePromise = loadStripe("pk_test_51R9EsLPMSycAr255m11UYTxYcOdQF9Cyv42biTd9j3W5UJAlYGIZHQ591KcDn89vYMqbLQ9Ttt1wN8gTvuIJlA0100FOhgqJYT"); // Replace with your real public key

const EnrollForm = ({ onClose }) => {
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

    const handleSubmitStep1 = () => setStep(2);
    const handleSubmitStep2 = () => setStep(3);
    const handleGoBack = () => setStep(prev => prev - 1);

    const stripe = useStripe();
    const elements = useElements();

    const registrationFee = 15000; // $150 in cents

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
            alert("Stripe has not loaded yet.");
            return;
        }
    
        try {
            // 1. Send form data to backend to create payment intent & save info
            const response = await fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    country: formData.country,
                    course: formData.course,
                    paymentMethod: 'card',
                    amount: 15000, // amount in cents e.g. $150 = 15000
                }),
            });
    
            const data = await response.json();
    
            if (data.error) {
                alert(`Server error: ${data.error}`);
                return;
            }
    
            // 2. Confirm payment using the client secret
            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: formData.fullName,
                        email: formData.email,
                    },
                },
            });
    
            if (result.error) {
                alert(`💥 Payment failed: ${result.error.message}`);
            } else if (result.paymentIntent.status === 'succeeded') {
                alert("✅ Payment successful! Check your email for your registration token.");
                onClose(); // if you want to close modal or clear form
            }
    
        } catch (err) {
            console.error("Error submitting payment:", err);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-xl relative overflow-auto max-h-[90vh]">
                <button
                    className="absolute top-4 right-4 text-2xl text-gray-700"
                    onClick={onClose}
                >
                    ×
                </button>

                {step > 1 && (
                    <button
                        onClick={handleGoBack}
                        className="absolute top-4 left-4 text-2xl text-gray-700"
                    >
                        <FaArrowLeft />
                    </button>
                )}

                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex justify-center items-center mx-auto">
                            Step 1: Personal Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Country</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                >
                                    <option value="">Select Country</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>
                        </div>
                        <button
                            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
                            onClick={handleSubmitStep1}
                        >
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex justify-center items-center mx-auto">Step 2: Course & Payment Option</h2>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600 mb-2">Course</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md text-black"
                                required
                            >
                                <option value="">Select Course</option>
                                <option value="AWS">AWS</option>
                                <option value="DevSecOps">DevSecOps</option>
                                <option value="Azure">Azure</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600 mb-2">Payment Option</label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md text-black"
                                required
                            >
                                <option value="">Select Payment Option</option>
                                <option value="one-time">One-time Payment</option>
                                <option value="installment">Installment Plan</option>
                            </select>
                        </div>
                        <button
                            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
                            onClick={handleSubmitStep2}
                        >
                            Next
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex justify-center items-center mx-auto">Step 3: Payment</h2>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600 mb-2">Card Details</label>
                            <div className="p-3 border border-gray-300 bg-gray-50 rounded-md">
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#1f2937',
                                                '::placeholder': {
                                                    color: '#9ca3af',
                                                },
                                            },
                                            invalid: {
                                                color: '#e53e3e',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-6 text-xl font-semibold text-gray-800">
                            Registration Fee: $150 (100 EUR)
                        </div>
                        <button
                            disabled={!stripe}
                            className={`w-full bg-green-600 text-white py-3 rounded-md transition duration-200 ${!stripe ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
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
