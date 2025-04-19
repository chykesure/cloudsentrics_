import React, { useState } from 'react';
import Swal from 'sweetalert2';
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitStep1 = () => setStep(2);
    const handleSubmitStep2 = () => setStep(3);
    const handleGoBack = () => setStep(prev => prev - 1);

    const stripe = useStripe();
    const elements = useElements();

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements || isSubmitting) return;
        setIsSubmitting(true);
    
        const cardElement = elements.getElement(CardElement);
        const { email, fullName, phone, country, course, paymentMethod } = formData;
    
        try {
            const response = await fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: 15000,
                    email,
                    fullName,
                    phone,
                    country,
                    course,
                    paymentMethod,
                }),
            });
    
            const { clientSecret } = await response.json();
    
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: fullName,
                        email: email,
                        phone: phone,
                    },
                },
            });
    
            if (result.error) {
                console.error(result.error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Failed',
                    text: result.error.message,
                });
                setIsSubmitting(false);
            } else if (result.paymentIntent.status === 'succeeded') {
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful!',
                    text: 'Thank you for enrolling. Your payment was successful.',
                    confirmButtonColor: '#00cc00',
                });
    
                // Send form data after successful payment
                const enrollResponse = await fetch('http://localhost:5000/api/enroll', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
    
                const contentType = enrollResponse.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await enrollResponse.text();
                    throw new Error("Not JSON: " + text);
                }
    
                const data = await enrollResponse.json();
                console.log('Enrollment data sent successfully:', data);
    
                setIsSubmitting(false);
                onClose(); // Close modal or form
            }
        } catch (err) {
            console.error("Payment Error:", err);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: err.message || 'Unexpected error occurred.',
            });
            setIsSubmitting(false);
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
                            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
                            onClick={handleSubmitStep1}
                        >
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Step 2: Course & Payment Option</h2>
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
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Step 3: Payment</h2>
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
                            disabled={!stripe || isSubmitting}
                            className={`w-full bg-green-600 text-white py-3 rounded-md transition duration-200 ${!stripe || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                            onClick={handlePaymentSubmit}
                        >
                            {isSubmitting ? 'Processing...' : 'Submit Payment'}
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
