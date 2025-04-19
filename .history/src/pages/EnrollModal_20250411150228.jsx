import React, { useState } from 'react';

const EnrollModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    paymentPlan: '',
    paymentMethod: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect to your payment gateway here
    alert('Enrollment complete!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black">&times;</button>

        <h2 className="text-2xl font-bold mb-4">Course Enrollment</h2>

        {/* Step 1 - Personal Info */}
        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 1: Personal Info</h3>
            <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="input" />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="input" />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="input" />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} className="input" />

            <div className="flex justify-end mt-4">
              <button onClick={handleNext} className="btn-primary">Next</button>
            </div>
          </div>
        )}

        {/* Step 2 - Course Selection */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 2: Course Selection</h3>
            <select name="course" onChange={handleChange} className="input">
              <option value="">Select Course</option>
              <option value="AWS DevSecOps">AWS DevSecOps</option>
              <option value="Cloud Security">Cloud Security</option>
              <option value="Network Engineering">Network Engineering</option>
            </select>
            <select name="paymentPlan" onChange={handleChange} className="input mt-2">
              <option value="">Select Payment Plan</option>
              <option value="One-time">One-time</option>
              <option value="Installment">Installment</option>
            </select>

            <div className="flex justify-between mt-4">
              <button onClick={handleBack} className="btn-secondary">Back</button>
              <button onClick={handleNext} className="btn-primary">Next</button>
            </div>
          </div>
        )}

        {/* Step 3 - Payment */}
        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 3: Payment Method</h3>
            <select name="paymentMethod" onChange={handleChange} className="input">
              <option value="">Select Payment Method</option>
              <option value="Card">Credit/Debit Card</option>
              <option value="Bank">Bank Transfer</option>
              <option value="Stripe">Stripe</option>
            </select>

            <div className="flex justify-between mt-4">
              <button onClick={handleBack} className="btn-secondary">Back</button>
              <button onClick={handleNext} className="btn-primary">Next</button>
            </div>
          </div>
        )}

        {/* Step 4 - Confirmation */}
        {step === 4 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 4: Confirm & Enroll</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li><strong>Name:</strong> {form.fullName}</li>
              <li><strong>Email:</strong> {form.email}</li>
              <li><strong>Phone:</strong> {form.phone}</li>
              <li><strong>Country:</strong> {form.country}</li>
              <li><strong>Course:</strong> {form.course}</li>
              <li><strong>Payment Plan:</strong> {form.paymentPlan}</li>
              <li><strong>Payment Method:</strong> {form.paymentMethod}</li>
            </ul>

            <div className="flex justify-between mt-4">
              <button onClick={handleBack} className="btn-secondary">Back</button>
              <button onClick={handleSubmit} className="btn-primary">Confirm & Pay</button>
            </div>
          </div>
        )}
      </div>

      {/* Tailwind style shortcuts */}
      <style>
        {`
          .input {
            display: block;
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 14px;
          }
          .btn-primary {
            background-color: #1e40af;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.3s;
          }
          .btn-primary:hover {
            background-color: #1d4ed8;
          }
          .btn-secondary {
            background-color: #e5e7eb;
            color: black;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.3s;
          }
          .btn-secondary:hover {
            background-color: #d1d5db;
          }
        `}
      </style>
    </div>
  );
};

export default EnrollModal;
