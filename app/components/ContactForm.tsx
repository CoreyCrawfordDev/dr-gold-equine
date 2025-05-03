'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Phone number validation regex - accepts formats like:
// (123) 456-7890, 123-456-7890, 1234567890
const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '', // City/State
    license_number: '', // Veterinary license number
    license_state: '', // State/Province of license
    horseInfo: '', // Horse details
    serviceType: '', // Type of service needed
    preferredContact: 'email', // Preferred contact method
    urgency: 'normal', // Urgency level
    message: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const validatePhone = (phone: string) => {
    if (!phone) return ''; // Phone is optional
    return PHONE_REGEX.test(phone) ? '' : 'Please enter a valid phone number';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone if provided
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setErrors(prev => ({ ...prev, phone: phoneError }));
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Format phone number for consistency if provided
      const formattedPhone = formData.phone ? formData.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : 'Not provided';

      const result = await emailjs.send(
        'service_k6l3yil',
        'template_nb3uurj',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formattedPhone,
          location: formData.location,
          license_number: formData.license_number,
          license_state: formData.license_state,
          horse_info: formData.horseInfo,
          service_type: formData.serviceType,
          preferred_contact: formData.preferredContact,
          urgency: formData.urgency,
          message: formData.message,
          title: 'Veterinary Consultation Request',
          to_email: 'contact@drgoldequinemed.com'
        },
        'ygXJArU5YKMNaPvk_'
      );

      if (result.text !== 'OK') {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      
      // Reset form and errors
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        license_number: '',
        license_state: '',
        horseInfo: '',
        serviceType: '',
        preferredContact: 'email',
        urgency: 'normal',
        message: '',
      });
      setErrors({ phone: '' });
    } catch (error) {
      console.error('Email.js error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear phone error when user starts typing
    if (name === 'phone') {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title" className="text-primary mb-6">Veterinary Consultation Request Form</h3>
      <p className="text-gray-600 mb-6">This form is for licensed veterinarians in the US and Canada only.</p>
      
      {/* Contact Information Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Veterinary Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder="Your full name"
              aria-required="true"
              minLength={2}
              maxLength={50}
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              Email *
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
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
              className={`input ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="(123) 456-7890"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="location" className="label">
              Practice Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="input"
              placeholder="City, State"
              aria-required="true"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="license_number" className="label">
              Veterinary License Number *
            </label>
            <input
              type="text"
              id="license_number"
              name="license_number"
              required
              value={formData.license_number}
              onChange={handleChange}
              className="input"
              placeholder="Your veterinary license number"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="license_state" className="label">
              License State/Province *
            </label>
            <input
              type="text"
              id="license_state"
              name="license_state"
              required
              value={formData.license_state}
              onChange={handleChange}
              className="input"
              placeholder="State or Province where licensed"
              aria-required="true"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="preferredContact" className="label">
            Preferred Contact Method *
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            required
            value={formData.preferredContact}
            onChange={handleChange}
            className="input"
            aria-required="true"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="either">Either</option>
          </select>
        </div>
      </div>

      {/* Consultation Details Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Consultation Details</h4>
        
        <div>
          <label htmlFor="horseInfo" className="label">
            Horse Information *
          </label>
          <textarea
            id="horseInfo"
            name="horseInfo"
            required
            value={formData.horseInfo}
            onChange={handleChange}
            rows={3}
            className="input"
            placeholder="Please provide details about your horse (age, breed, any relevant history)"
            aria-required="true"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="serviceType" className="label">
            Type of Service Needed *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="input"
            aria-required="true"
          >
            <option value="">Select a service</option>
            <option value="general">General Consultation</option>
            <option value="lameness">Lameness Evaluation</option>
            <option value="performance">Performance Assessment</option>
            <option value="preventive">Preventive Care</option>
            <option value="emergency">Emergency Care</option>
            <option value="other">Other (specify in message)</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="urgency" className="label">
            Urgency Level *
          </label>
          <select
            id="urgency"
            name="urgency"
            required
            value={formData.urgency}
            onChange={handleChange}
            className="input"
            aria-required="true"
          >
            <option value="normal">Normal - Response within 2-3 business days</option>
            <option value="soon">Soon - Response within 24 hours</option>
            <option value="urgent">Urgent - Immediate attention needed</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="label">
            Additional Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="input"
            placeholder="Please provide any additional information about your consultation request..."
            aria-required="true"
            minLength={10}
            maxLength={1000}
          />
        </div>
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

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
        disabled={status.type === 'loading'}
      >
        {status.type === 'loading' ? 'Sending...' : 'Submit Consultation Request'}
      </button>
    </form>
  );
} 