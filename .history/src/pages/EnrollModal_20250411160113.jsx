// EnrollModal.js
import React from 'react';
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
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
  background: rgba(0,0,0,0.6);
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
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

const CardContainer = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
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

// CheckoutForm Component
const CheckoutForm = ({ onClose }) => {
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
          name: 'Customer Name',
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
    <form onSubmit={handleSubmit}>
      <Title>Enroll & Pay <span style={{ color: '#22c55e' }}>$250.28</span></Title>

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

      <Button type="submit" disabled={!stripe}>
        Pay Now
      </Button>
    </form>
  );
};

// EnrollModal Wrapper Component
const EnrollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        <Elements stripe={stripePromise}>
          <CheckoutForm onClose={onClose} />
        </Elements>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EnrollModal;
