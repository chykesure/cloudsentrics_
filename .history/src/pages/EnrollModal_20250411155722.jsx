// EnrollModal.js (Multi-Step Version)
import React, { useState } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';

const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  font-size: 1.5rem;
  border: none;
  color: #555;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #22c55e;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #16a34a;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Step 1: Enrollment Info
const Step1Form = ({ next, formData, setFormData }) => (
  <form onSubmit={(e) => { e.preventDefault(); next(); }}>
    <Title>Step 1: Your Details</Title>

    <label>Full Name</label>
    <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />

    <label>Email</label>
    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />

    <label>Phone</label>
    <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />

    <label>Country</label>
    <select value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })} required>
      <option value="">Select</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="Nigeria">Nigeria</option>
    </select>

    <label>Course</label>
    <select value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })} required>
      <option value="">Select Course</option>
      <option value="AWS DevSecOps">AWS DevSecOps</option>
      <option value="Cloud Security">Cloud Security</option>
    </select>

    <Button type="submit">Next</Button>
  </form>
);

// Step 2: Stripe Payment
const Step2Payment = ({ formData, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const res = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 25028 })
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formData.name,
        },
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert("✅ Payment Successful!");
        onClose();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Step 2: Enter Payment Details</Title>
      <CardElement options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#1f2937',
            '::placeholder': { color: '#9ca3af' },
          },
          invalid: { color: '#e53e3e' }
        }
      }} />

      <Button type="submit" disabled={!stripe}>Pay USD 250.28</Button>
    </form>
  );
};

const EnrollModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '', course: ''
  });

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        <Elements stripe={stripePromise}>
          {step === 1 && <Step1Form next={() => setStep(2)} formData={formData} setFormData={setFormData} />}
          {step === 2 && <Step2Payment formData={formData} onClose={onClose} />}
        </Elements>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EnrollModal;
