import React, { useState } from 'react';
import { auth } from '../../firebase'; // Import the Firebase auth module
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; // Import required functions
import './Login.css';
import bbmsLogo from './bbms-logo.png'; // Correct path to your logo image

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Create Account
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Handle Login functionality using Firebase
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      console.log(userCredential.user);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  // Handle Signup functionality using Firebase
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      console.log(userCredential.user);
    } catch (error) {
      setError('Error creating account: ' + error.message);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Forgot Password functionality
  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (error) {
      setError('Error sending reset email: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {/* Logo */}
        <div className="login-logo">
          <img src={bbmsLogo} alt="BBMS Logo" />
        </div>

        {/* Title */}
        <h2 className="login-title">{isLogin ? 'Login' : 'Create Account'}</h2>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        {/* Password Input and Show/Hide Toggle */}
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="button" className="show-password" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </div>

        {/* Error message */}
        {error && <div className="error-message">{error}</div>}

        {/* Forgot Password Button */}
        <button className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </button>

        {/* Conditional Buttons for Login or Create Account */}
        {isLogin ? (
          <div>
            <button onClick={handleLogin} className="login-button">Login</button>
            <p className="create-account">
              Don't have an account?{' '}
              <span onClick={() => setIsLogin(false)} className="link">Create one</span>
            </p>
          </div>
        ) : (
          <div>
            <button onClick={handleSignUp} className="create-account-button">Create Account</button>
            <p className="create-account">
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)} className="link">Login</span>
            </p>
          </div>
        )}
      </div>

      {/* Background Image */}
      <div className="background-image"></div>
    </div>
  );
};

export default Login;
