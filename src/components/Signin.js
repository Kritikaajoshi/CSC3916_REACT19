import React, { useState } from 'react';
import { signin } from '../api';

function Signin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const result = await signin(form.username, form.password);
    if (result.token) {
      localStorage.setItem('token', result.token);
      setMessage('Signed in successfully!');
    } else {
      setMessage(result.msg || result.message || 'Sign in failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Sign In</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <input name="username" placeholder="Username" value={form.username}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input name="password" type="password" placeholder="Password" value={form.password}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <button onClick={handleSubmit}
        style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none' }}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;