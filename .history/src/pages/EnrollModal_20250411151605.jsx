import React from 'react';
import styled from 'styled-components';

// ===== Styled Components =====
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: 'Inter', sans-serif;
`;

const ModalContent = styled.div`
  background: #ffffff;
  color: #1f2937;
  max-height: 90vh;
  overflow-y: auto;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 720px;
  position: relative;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 25px 0 10px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #22c55e;
  color: #ffffff;
  padding: 14px;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #16a34a;
  }
`;

// ===== Main Component =====
const EnrollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseBtn onClick={onClose}>×</CloseBtn>

        <Title>Course Enrollment</Title>

        {/* --- Enrollment Form --- */}
        <SectionTitle>Student Info</SectionTitle>
        <Label>Full Name</Label>
        <Input placeholder="Enter your name" />

        <Label>Email</Label>
        <Input placeholder="Enter your email" />

        <Label>Phone Number</Label>
        <Input placeholder="Enter your phone number" />

        <Label>Country</Label>
        <Select>
          <option value="">Select country</option>
          <option>Nigeria</option>
          <option>USA</option>
          <option>UK</option>
        </Select>

        <Label>Course Selection</Label>
        <Select>
          <option value="">Choose a course</option>
          <option>AWS DevSecOps</option>
          <option>Cloud Security</option>
          <option>Cybersecurity Essentials</option>
        </Select>

        <Label>Payment Option</Label>
        <Select>
          <option>One-time</option>
          <option>Installment</option>
        </Select>

        {/* --- Payment Section --- */}
        <SectionTitle>Payment</SectionTitle>

        <Label>Card Number</Label>
        <Input placeholder="5399 0000 0000 0000" />

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <Label>Expiration Date</Label>
            <Input placeholder="MM/YY" />
          </div>
          <div style={{ flex: 1 }}>
            <Label>CVV</Label>
            <Input placeholder="***" />
          </div>
        </div>

        <CheckboxLabel>
          <input type="checkbox" /> Save card details
        </CheckboxLabel>

        <Button>Pay USD 250.28</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EnrollModal;
