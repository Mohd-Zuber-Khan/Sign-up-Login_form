import React, { useState } from 'react';

function Main() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  function handleLoginUsernameChange (e){
    setLoginUsername(e.target.value);
  };

  function handleLoginPasswordChange (e){
    setLoginPassword(e.target.value);
  };

  function handleRegisterUsernameChange (e){
    setRegisterUsername(e.target.value);
  };

  function handleRegisterPasswordChange (e){
    setRegisterPassword(e.target.value);
  };

  function handleLoginSubmit (e){
    e.preventDefault();
    const storedUsername = sessionStorage.getItem('username');
    const storedPassword = sessionStorage.getItem('password');
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      console.log('Login successful');
      setLoginUsername('');
      setLoginPassword('');
    } else {
      console.log('Invalid username or password');
    }
  };

  
  function handleRegisterSubmit (e){
    e.preventDefault();
    sessionStorage.setItem('username', registerUsername);
    sessionStorage.setItem('password', registerPassword);
    console.log('Registration successful');
    setRegisterUsername('');
    setRegisterPassword('');
  };

  return (
        <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={loginUsername}
            onChange={handleLoginUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={loginPassword}
            onChange={handleLoginPasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={registerUsername}
            onChange={handleRegisterUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={registerPassword}
            onChange={handleRegisterPasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Main;
