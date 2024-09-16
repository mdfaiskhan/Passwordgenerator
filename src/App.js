import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordValidator from './components/PasswordValidator';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <PasswordGenerator />
      <PasswordValidator />
    </div>
  );
};

export default App;



