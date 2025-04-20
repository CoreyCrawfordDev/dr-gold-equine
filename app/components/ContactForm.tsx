'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title" className="text-primary mb-6">Send a Message</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Your name"
            aria-required="true"
            aria-label="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="your.email@example.com"
            aria-required="true"
            aria-label="Your email address"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input"
          placeholder="Your phone number (optional)"
          aria-label="Your phone number (optional)"
        />
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="input"
          placeholder="Please describe your inquiry..."
          aria-required="true"
          aria-label="Your message"
        />
      </div>
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'error'
              ? 'bg-red-50 text-red-700'
              : status.type === 'success'
              ? 'bg-green-50 text-green-700'
              : 'bg-blue-50 text-blue-700'
          }`}
          role="alert"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status.type === 'loading'}
          aria-label={status.type === 'loading' ? 'Sending message...' : 'Send message'}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
} 