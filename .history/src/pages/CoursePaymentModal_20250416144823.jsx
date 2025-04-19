import React, { useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FaArrowLeft } from 'react-icons/fa';

const stripePromise = loadStripe('pk_test_51R9EsLPMSycAr255m11UYTxYcOdQF9Cyv42biTd9j3W5UJAlYGIZHQ591KcDn89vYMqbLQ9Ttt1wN8gTvuIJlA0100FOhgqJYT'); // Replace with your real public key
const coursePricing = 3000; // Fixed price for all courses in USD cents

const CourseForm = ({ onClose }) => {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        course: '',
        paymentMethod: '',
        token: '',
        amount: '', // New field for custom amount
    });

    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleVerifyToken = async () => {
        const { email, token } = formData;

        if (!email || !token) {
            alert('⚠️ Please enter both email and token.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/verifytoken', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error('❌ Server responded with error:', errorData);
                alert(`❌ Server Error: ${errorData.error || 'Unknown error'}`);
            } else {
                const data = await res.json();
                if (data.valid) {
                    alert('✅ Token verified successfully!');
                    setStep(1);
                } else {
                    alert('❌ Invalid token. Please try again.');
                }
            }
        } catch (err) {
            console.error('❌ Fetch failed:', err);
            alert('❌ Network error or server is unreachable.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitStep1 = () => setStep(2);
    const handleSubmitStep2 = () => setStep(3);
    const handleGoBack = () => setStep((prev) => prev - 1);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        try {
            const res = await fetch('http://localhost:5000/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount:
                        formData.paymentMethod === 'one-time'
                            ? coursePricing
                            : formData.amount * 100, // cents
                    email: formData.email,
                }),
            });

            const data = await res.json();

            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: formData.fullName,
                    },
                },
            });

            if (result.error) {
                alert('❌ Payment failed: ' + result.error.message);
            } else if (result.paymentIntent.status === 'succeeded') {
                alert('✅ Payment Successful!');

                // 🔽 Save enrollment details to backend
                await fetch('http://localhost:5000/api/save-enrollment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formData,
                        amount: formData.paymentMethod === 'one-time'
                            ? coursePricing
                            : formData.amount,
                        paymentIntentId: result.paymentIntent.id,
                        paymentStatus: result.paymentIntent.status
                    })
                });

                setStep(4); // Show confirmation screen
            }
        } catch (err) {
            console.error('Payment Error:', err);
            alert('❌ Something went wrong!');
        }
    };

    const isAmountValid = () => {
        if (formData.paymentMethod === 'installment') {
            return formData.amount >= 1000; // Validate for installment plan
        }
        return formData.paymentMethod === 'one-time' && formData.amount === 3000; // Validate for one-time payment
    };

    const getCurrencyInfo = (country, amountUSD) => {
        switch (country) {
            case 'Nigeria':
                return { currency: 'NGN', amount: (amountUSD * 1400).toLocaleString() }; // Example rate
            case 'United Kingdom':
                return { currency: 'GBP', amount: (amountUSD * 0.76).toFixed(2) };
            case 'Canada':
                return { currency: 'CAD', amount: (amountUSD * 1.35).toFixed(2) };
            case 'United States':
                return { currency: 'USD', amount: amountUSD.toFixed(2) };
            default:
                return null;
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
                {step > 0 && (
                    <button
                        onClick={handleGoBack}
                        className="absolute top-4 left-4 text-2xl text-gray-700"
                    >
                        <FaArrowLeft />
                    </button>
                )}

                {step === 0 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                            Enter Your Token
                        </h2>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Token
                            </label>
                            <input
                                type="text"
                                name="token"
                                value={formData.token}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter 6-digit token"
                                required
                            />
                        </div>
                        <button
                            className="w-full bg-[#1e4272] text-white py-3 rounded-md hover:bg-blue-700"
                            onClick={handleVerifyToken}
                        >
                            Verify Token
                        </button>
                    </>
                )}

                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
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
                            className="w-full bg-[#1e4272] text-white py-3 rounded-md hover:bg-green-700"
                            onClick={handleSubmitStep1}
                        >
                            Next
                        </button>
                    </>
                )}


                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                            Step 2: Select Payment Method
                        </h2>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Choose a payment method:
                            </label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            >
                                <option value="">-- Select --</option>
                                <option value="one-time">One-time Payment (USD 3000.00)</option>
                                <option value="installment">Installment Plan</option>
                            </select>
                        </div>
                        {formData.paymentMethod === 'installment' && (
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Enter Amount (Minimum $1000)
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    min="1000"
                                    required
                                />
                            </div>
                        )}
                        {formData.paymentMethod === 'one-time' && (
                            <p className="text-green-700 font-semibold text-center mb-6">
                                You will be charged <strong>USD 3000.00</strong>
                            </p>
                        )}



                        <button
                            className="w-full bg-[#1e4272] text-white py-3 rounded-md hover:bg-blue-700"
                            onClick={handleSubmitStep2}
                            disabled={
                                !formData.paymentMethod ||
                                (formData.paymentMethod === 'installment' &&
                                    (!formData.amount || formData.amount < 1000))
                            }
                        >
                            Next
                        </button>

                        {formData.country && formData.paymentMethod && (
                            <div className="mb-6 text-center text-gray-700 font-medium">
                                {(() => {
                                    const currencyInfo = getCurrencyInfo(
                                        formData.country,
                                        formData.paymentMethod === 'one-time' ? 3000 : parseFloat(formData.amount || 0)
                                    );
                                    return currencyInfo
                                        ? `You will be charged approximately ${currencyInfo.currency} ${currencyInfo.amount}`
                                        : 'Exchange rate unavailable for selected country.';
                                })()}
                            </div>
                        )}

                    </>
                )}

                {step === 3 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                            Step 3: Payment Details
                        </h2>
                        <form onSubmit={handlePaymentSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Card Details
                                </label>
                                <div className="p-3 border border-gray-300 rounded-md">
                                    <CardElement />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#1e4272] text-white py-3 rounded-md hover:bg-blue-700"
                                disabled={!stripe || !elements || !isAmountValid()}
                            >
                                {formData.paymentMethod === 'one-time'
                                    ? 'Pay USD 3000.00'
                                    : `Pay USD ${formData.amount}`}
                            </button>
                        </form>
                    </>
                )}

                {step === 4 && (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-700 mb-4">
                            🎉 Payment Successful!
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Thank you, {formData.fullName}! We've received your payment for{' '}
                            <strong>{formData.course}</strong>.
                        </p>
                        <button
                            onClick={onClose}
                            className="bg-[#1e4272] text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Main component wrapped with Stripe provider
const PaymentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <Elements stripe={stripePromise}>
            <CourseForm onClose={onClose} />
        </Elements>
    );
};

export default PaymentModal;

