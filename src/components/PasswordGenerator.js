import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    let charset = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (includeUpper) charset += upper;
    if (includeLower) charset += lower;
    if (includeNumbers) charset += numbers;
    if (includeSpecial) charset += special;

    if (charset === '') {
      alert("Please select at least one option!");
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="password-generator-container">
      <h2>Password Generator</h2>
      <div className="password-generator-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          readOnly
          className="password-generator-input"
        />
        <div
          className="password-generator-eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <div className="password-generator-controls">
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <div className="password-generator-checkboxes">
          <div>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            /> Include Uppercase Letters
          </div>
          <div>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            /> Include Lowercase Letters
          </div>
          <div>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            /> Include Numbers
          </div>
          <div>
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={() => setIncludeSpecial(!includeSpecial)}
            /> Include Special Characters
          </div>
        </div>
      </div>
      <button
        className="password-generator-button"
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;

