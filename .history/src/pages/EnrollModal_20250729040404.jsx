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

const stripePromise = loadStripe("pk_live_51R9EsFA5h1KG7jkXHQY1QDycyTk0V5GC6HkZnpUKXXJIQgmELlXBVfne3fuQTtKId7L14VJWrQF5yFEZJbgwe5E500Axwg86Z8"); // Replace with your real public key

const EnrollForm = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        course: '',
        paymentMethod: '',
        referral: '', // ✅ Add this
    });

    // Add above your component
    const countryList = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei",
        "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
        "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
        "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras",
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
        "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova",
        "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts & Nevis",
        "Saint Lucia", "Saint Vincent & Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia",
        "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
        "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago",
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
        "Yemen", "Zambia", "Zimbabwe"
    ];

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
            const response = await fetch("https://api.cloudsentrics.org/create-payment-intent", {
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
                    text: 'Thank you for Form Registration. Your payment was successful.',
                    confirmButtonColor: '#00cc00',
                });

                // Send form data after successful payment
                const enrollResponse = await fetch('https://api.cloudsentrics.org/api/enroll', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });



                const data = await enrollResponse.json();
                console.log('Enrollment data sent successfully:', data);

                // ✅ Save the token to localStorage
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    console.log("Token saved to localStorage:", data.token);
                } else {
                    console.warn("No token received from backend.");
                }


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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Referral Name</label>
                                    <input
                                        type="text"
                                        name="referral"
                                        value={formData.referral}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-md text-black"
                                        placeholder="Enter referral name (if any)"
                                    />
                                </div>
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
                                <option value="Registration Fee">Registration Fee</option>

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
                            Registration Fee: $150
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
