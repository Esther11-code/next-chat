"use client"

import React, { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setError('');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      setResponseMessage('');
    }
  };

  return (
    <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded shadow-2xl p-4">
      <h1 className="text-lg font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter phone number here"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter password here"
        />

        <button type="submit" className="px-4 py-2 border rounded mb-3 bg-primary">
          Login
        </button>
      </form>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {responseMessage && <div className="text-green-500 mb-2">{responseMessage}</div>}
    </section>
  );
}