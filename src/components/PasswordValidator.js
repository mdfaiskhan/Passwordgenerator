import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './PasswordValidator.css';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState('');

  const calculateStrength = () => {
    if (password.length < 8) return 'very-weak';
    if (!/(?=.*[a-z])/.test(password)) return 'weak';
    if (!/(?=.*[A-Z])/.test(password)) return 'moderate';
    if (!/(?=.*\d)/.test(password)) return 'strong';
    return 'very-strong';
  };

  const handleSubmit = () => {
    setStrength(calculateStrength());
  };

  return (
    <div className="password-validator-container">
      <h2>Password Validator</h2>
      <div className="password-validator-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="password-validator-input"
        />
        <div
          className="password-validator-eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <button
        className="password-validator-submit-button"
        onClick={handleSubmit}
      >
        Validate Password
      </button>
      {strength && (
        <p className={`password-validator-strength ${strength}`}>
          Strength: {strength.replace('-', ' ').toUpperCase()}
        </p>
      )}
    </div>
  );
};

export default PasswordValidator;





