import React, { useState } from 'react';
import { signup } from '../api';

function Signup() {
  const [form, setForm] = useState({ name: '', username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const result = await signup(form.name, form.username, form.password);
    setMessage(result.msg || result.message);
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Sign Up</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <input name="name" placeholder="Full Name" value={form.name}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input name="username" placeholder="Username" value={form.username}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input name="password" type="password" placeholder="Password" value={form.password}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <button onClick={handleSubmit}
        style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none' }}>
        Sign Up
      </button>
    </div>
  );
}

export default Signup;