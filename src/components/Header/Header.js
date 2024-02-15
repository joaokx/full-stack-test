import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/Logo.png';

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);


  const handleEntrarClick = () => {
    setShowLoginPopup(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await signIn();
  };

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signIn = async () => {
    try {
      console.log('Sending login request...');
      const response = await fetch('https://full-stack-test-api.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password }),
      });

      console.log('Received response:', response);

      if (!response.ok) {
        console.error('Failed to authenticate:', response.status, response.statusText);
        throw new Error('Failed to authenticate');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      setUser(data.user);
      localStorage.setItem('token', data.token);
      setLoginSuccess(true);
      setShowLoginPopup(false); 

     
      setTimeout(() => {
        setLoginSuccess(false);
      }, 3000);

      
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="header">
      <button className="button-header" onClick={handleEntrarClick}>
        <div className="entrar-wrapper">
          <div className="entrar">entrar</div>
        </div>
      </button>
      <img className="logo" alt="Logo" src={logo} />

      {showLoginPopup && (
        <div className="login-popup-overlay">
          <div className="login-popup">
            <h2 className='title-header'>Sign in</h2>
            <h3 className='subtile-header'>to access your list</h3>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label className='label-username' htmlFor="username">Usuário:</label>
                <input
                  type="text"
                  id="username"
                  value={email}
                  onChange={handleUsernameChange}
                  required
                  className='input-header-user'
                />
              </div>
              <div className="form-group">
                <label className='label-pass' htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className='input-header-pass'
                />
              </div>
              <button className="signin" type="submit">Sign In</button>
            </form>
            <button className="close" onClick={() => setShowLoginPopup(false)}>close</button>
          </div>
        </div>
      )}

      {loginSuccess && (
        <div className="login-success-message">
          Login successful! Welcome, {user.name}!
        </div>
      )}
    </div>
  );
}

export default Header;
