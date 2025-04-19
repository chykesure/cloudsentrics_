// EnrollModal.jsx
import React, { useState } from 'react';
import Step1Form from './enrollmentSteps/Step1Form';
import Step2Payment from './enrollmentSteps/Step2Payment';
import Step3Review from './enrollmentSteps/Step3Review';
import Step4Success from './enrollmentSteps/Step4Success';
import styled from 'styled-components';

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

const EnrollModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  if (!isOpen) return null;

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const updateFormData = (data) => setFormData(prev => ({ ...prev, ...data }));

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        {step === 1 && (
          <Step1Form
            nextStep={nextStep}
            updateFormData={updateFormData}
            data={formData}
          />
        )}
        {step === 2 && (
          <Step2Payment
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            data={formData}
          />
        )}
        {step === 3 && (
          <Step3Review
            nextStep={nextStep}
            prevStep={prevStep}
            data={formData}
          />
        )}
        {step === 4 && <Step4Success onClose={onClose} />}
      </ModalContent>
    </ModalOverlay>
  );
};

export default EnrollModal;
