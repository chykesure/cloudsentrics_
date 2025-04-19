import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 700px;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SectionTitle = styled.h3`
  margin-top: 25px;
  font-size: 20px;
  color: #333;
`;

const EnrollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        <h2>Navigation Layout for Student Enrollment</h2>

        <SectionTitle>1. Home → Enrollment Page</SectionTitle>
        <ul>
          <li><strong>Button:</strong> “Enroll Now” (Leads to Enrollment Form)</li>
          <li><strong>Brief Info:</strong> Course details, benefits, duration</li>
        </ul>

        <SectionTitle>2. Enrollment Form</SectionTitle>
        <ul>
          <li><strong>Personal Details:</strong>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Country (Dropdown)</li>
            </ul>
          </li>
          <li><strong>Course Selection:</strong> Dropdown (AWS DevSecOps, Cloud Security, etc.)</li>
          <li><strong>Payment Option:</strong> One-time / Installment plan</li>
        </ul>

        <SectionTitle>3. Payment Page</SectionTitle>
        <ul>
          <li><strong>Summary of Course & Fees</strong></li>
          <li><strong>Payment Methods:</strong> Credit/Debit Card, Bank Transfer</li>
          <li><strong>Billing Info Form:</strong>
            <ul>
              <li>Student Info: Name, Email, Phone, Country, Address</li>
              <li>Course Selection: Course, Batch, Mode (Online/In-Person)</li>
              <li>Payment Details: Method, Card Info, Billing Address</li>
              <li>Payment Summary: Course Fee, Discounts, Total</li>
              <li>Agreement: T&C checkbox, Submit & Confirmation button</li>
            </ul>
          </li>
        </ul>

        <SectionTitle>4. Confirmation & Dashboard Access</SectionTitle>
        <ul>
          <li>Success message</li>
          <li>Redirect to student dashboard (course materials, schedule, support)</li>
        </ul>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EnrollModal;
