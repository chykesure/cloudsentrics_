import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';

// Replace with your actual Stripe public key
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
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

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #22c55e;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
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

const CardContainer = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
`;

// Multi-step Form component
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitStep1 = () => setStep(2); // Proceed to course selection
  const handleSubmitStep2 = () => setStep(3); // Proceed to payment details

  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentSubmit = async (e) => {
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
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={onClose}>×</CloseBtn>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <>
            <Title>Step 1: Personal Details</Title>
            <FormGroup>
              <Label>Full Name</Label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email Address</Label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                {/* Add country options here */}
              </select>
            </FormGroup>
            <Button onClick={handleSubmitStep1}>Next</Button>
          </>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <>
            <Title>Step 2: Course & Payment Option</Title>
            <FormGroup>
              <Label>Course</Label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="AWS DevSecOps">AWS DevSecOps</option>
                <option value="Cloud Security">Cloud Security</option>
                {/* Add more courses */}
              </select>
            </FormGroup>
            <FormGroup>
              <Label>Payment Option</Label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Option</option>
                <option value="one-time">One-time payment</option>
                <option value="installment">Installment plan</option>
              </select>
            </FormGroup>
            <Button onClick={handleSubmitStep2}>Next</Button>
          </>
        )}

        {/* Step 3: Payment Details */}
        {step === 3 && (
          <>
            <Title>Step 3: Payment</Title>
            <FormGroup>
              <Label>Card Details</Label>
              <CardContainer>
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
              </CardContainer>
            </FormGroup>
            <Button onClick={handlePaymentSubmit}>Submit Payment</Button>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
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
