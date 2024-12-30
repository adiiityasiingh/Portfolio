import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div>
        <label htmlFor="name" className="block  text-sm font-medium text-gray-200">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-5 block w-full rounded-md bg-white/5 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block p-5 w-full rounded-md bg-white/5 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md bg-white/5 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;