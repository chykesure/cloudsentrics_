import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FaArrowLeft } from 'react-icons/fa';

const stripePromise = loadStripe("your-public-key"); // Replace with your actual public key

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
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitStep1 = () => setStep(2);
    const handleSubmitStep2 = () => setStep(3);
    const handleGoBack = () => setStep(prev => prev - 1);

    const stripe = useStripe();
    const elements = useElements();

    const registrationFee = 15000; // $150 in cents

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        try {
            const res = await fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: registrationFee, email: formData.email }),
            });

            const data = await res.json();

            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: { card: cardElement, billing_details: { name: formData.fullName } },
            });

            if (result.error) {
                console.error(result.error.message);
                alert("❌ Payment failed: " + result.error.message);
            } else if (result.paymentIntent.status === 'succeeded') {
                alert("✅ Payment Successful!");
                onClose(); // Close the modal on success
            }
        } catch (err) {
            console.error("Payment Error:", err);
            alert("❌ Something went wrong!");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-xl relative overflow-auto max-h-[90vh]">
                <button className="absolute top-4 right-4 text-2xl text-gray-700" onClick={onClose}>×</button>
                {step > 1 && (
                    <button onClick={handleGoBack} className="absolute top-4 left-4 text-2xl text-gray-700">
                        <FaArrowLeft />
                    </button>
                )}

                {/* Step 1: Personal Details */}
                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6">Step 1: Personal Details</h2>
                        <div>
                            <label>Full Name</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Country</label>
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Select Country</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                        <button onClick={handleSubmitStep1}>Next</button>
                    </>
                )}

                {/* Step 2: Course & Payment Option */}
                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6">Step 2: Course & Payment Option</h2>
                        <div>
                            <label>Course</label>
                            <select name="course" value={formData.course} onChange={handleChange}>
                                <option value="">Select Course</option>
                                <option value="AWS">AWS</option>
                                <option value="DevSecOps">DevSecOps</option>
                            </select>
                        </div>
                        <div>
                            <label>Payment Option</label>
                            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                                <option value="">Select Payment Option</option>
                                <option value="one-time">One-time Payment</option>
                                <option value="installment">Installment Plan</option>
                            </select>
                        </div>
                        <button onClick={handleSubmitStep2}>Next</button>
                    </>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6">Step 3: Payment</h2>
                        <div>
                            <label>Card Details</label>
                            <CardElement />
                        </div>
                        <button disabled={!stripe} onClick={handlePaymentSubmit}>
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
