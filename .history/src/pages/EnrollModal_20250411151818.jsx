// EnrollModal.js
import React from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';

// Stripe public key
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

// Styled-components (reuse from earlier)
const ModalOverlay = styled.div`...`;
const ModalContent = styled.div`...`;
const CloseBtn = styled.button`...`;
const Label = styled.label`...`;
const Button = styled.button`...`;
const Title = styled.h2`...`;

const CheckoutForm = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    // Make call to your backend to create payment intent and get client_secret
    const res = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 25028 }) // amount in cents
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
        alert("Payment Successful!");
        onClose();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Enroll & Pay USD250.28</Title>

      <Label>Card Details</Label>
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

      <Button type="submit" disabled={!stripe}>
        Pay Now
      </Button>
    </form>
  );
};

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
