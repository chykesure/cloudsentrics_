import React, { useState } from 'react';
import fetch from 'node-fetch';
import fs from 'fs'; // ❌ This will break in frontend
import Swal from 'sweetalert2';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FaArrowLeft } from 'react-icons/fa';

const stripePromise = loadStripe('pk_test_51R9EsLPMSycAr255m11UYTxYcOdQF9Cyv42biTd9j3W5UJAlYGIZHQ591KcDn89vYMqbLQ9Ttt1wN8gTvuIJlA0100FOhgqJYT'); // Replace with your real public key
const coursePricing = 300000; // Fixed price for all courses in USD cents


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


    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'paymentMethod' && value === 'one-time') {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
                amount: 300000, // Set default amount for one-time
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleVerifyToken = async () => {
        const { email, token } = formData;

        if (!email || !token) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: '⚠️ Please enter both email and token.',
            });
            return;
        }

        const authToken = localStorage.getItem('token');
        if (!authToken) {
            Swal.fire({
                icon: 'error',
                title: 'No Auth Token',
                text: '❌ No authorization token found. Please log in again.',
            });
            return;
        }

        // Decode and check expiration
        try {
            const decoded = jwtDecode(authToken);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp < currentTime) {
                Swal.fire({
                    icon: 'error',
                    title: 'Token Expired',
                    text: '❌ Your session has expired. Please log in again.',
                });
                localStorage.removeItem('token'); // clear expired token
                return;
            }
        } catch (decodeErr) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Token',
                text: '❌ Invalid token format. Please log in again.',
            });
            localStorage.removeItem('token');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/verifytoken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (!res.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Verification Failed',
                    text: data.error || '❌ Invalid or expired token.',
                });
            } else if (data.valid) {
                Swal.fire({
                    icon: 'success',
                    title: 'Token Verified',
                    text: '✅ Token verified successfully!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Token',
                    text: '❌ Invalid token. Please try again.',
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: '❌ Network error or server is unreachable.',
            });
        } finally {
            setLoading(false);
        }
    };



    const handleSubmitStep1 = () => setStep(2);
    const handleSubmitStep2 = () => setStep(3);
    const handleGoBack = () => setStep((prev) => prev - 1);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || isSubmitting) return;
        setIsSubmitting(true);

        const cardElement = elements.getElement(CardElement);

        try {
            const res = await fetch('http://localhost:5000/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount:
                        formData.paymentMethod === 'one-time'
                            ? coursePricing
                            : formData.amount * 100,
                    email: formData.email,
                    course: formData.course,
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Payment Intent Error: ${res.status} - ${errorText}`);
            }

            const data = await res.json();

            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: formData.fullName,
                        email: formData.email,
                    },
                },
            });

            if (result.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Failed',
                    text: result.error.message,
                });
                return;
            }

            if (result.paymentIntent.status === 'succeeded') {
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful!',
                    text: 'Your enrollment has been confirmed.',
                    confirmButtonColor: '#00cc00',
                });

                // ✅ Removed database save call
                setStep(4); // Go to confirmation screen
            }
        } catch (err) {
            console.error('❌ Payment Error:', err);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: err.message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    const isAmountValid = () => {
        if (formData.paymentMethod === 'installment') {
            return formData.amount >= 1000; // Validate for installment plan
        }
        return formData.paymentMethod === 'one-time' && formData.amount === 300000; // Validate for one-time payment
    };

    const getCurrencyInfo = async (country, amountUSD) => {
        const currencyMap = {
            'Nigeria': 'NGN',
            'United Kingdom': 'GBP',
            'Canada': 'CAD',
            'United States': 'USD',
        };

        const currency = currencyMap[country];

        if (!currency) {
            return null;
        }

        if (currency === 'USD') {
            return { currency: 'USD', amount: amountUSD.toFixed(2) };
        }

        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/USD`);
            const data = await response.json();

            if (!data.conversion_rates || !data.conversion_rates[currency]) {
                throw new Error('Invalid currency rate data');
            }

            const rate = data.conversion_rates[currency];
            const convertedAmount = (amountUSD * rate).toFixed(2);

            return {
                currency,
                amount: convertedAmount
            };
        } catch (error) {
            console.error('❌ Error fetching exchange rate:', error.message);
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

                {/* {step === 0 && (
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
                )} */}

                {step === 0 && (
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
                                {formData.paymentMethod === 'installment' && formData.amount && parseFloat(formData.amount) < 1000 && (
                                    <p className="text-red-500 text-sm mt-1">Amount must be at least $1000</p>
                                )}
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
                                        formData.paymentMethod === 'one-time' ? 300000 : parseFloat(formData.amount || 0)
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
                    <form onSubmit={handlePaymentSubmit}>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                            Step 3: Enter Payment Details
                        </h2>

                        <div className="mb-6">
                            <CardElement className="p-3 border border-gray-300 rounded-md" />
                        </div>

                        <button
                            disabled={!stripe || isSubmitting}
                            className={`w-full bg-green-600 text-white py-3 rounded-md transition duration-200 transform ${isSubmitting || !stripe
                                ? 'opacity-50 cursor-not-allowed animate-pulse'
                                : 'hover:bg-green-700 hover:scale-105 hover:ring-4 hover:ring-green-300'
                                }`}
                            onClick={handlePaymentSubmit}
                        >
                            {isSubmitting ? 'Processing...' : 'Submit Payment'}
                        </button>
                    </form>
                )}

                {step === 4 && (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-green-700 mb-4">
                            🎉 Enrollment Successful!
                        </h2>
                        <p className="text-lg text-gray-700">
                            Thank you for your payment, {formData.fullName}! A confirmation has been sent to <strong>{formData.email}</strong>.
                        </p>
                        <button
                            className="mt-6 bg-[#1e4272] text-white px-6 py-3 rounded-md hover:bg-blue-700"
                            onClick={onClose}
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

