import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { sendEmail } from '../../services/emailService';
import type { EmailData } from '../../types/email';

const ContactForm = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const result = await sendEmail(formData);
    
    setStatus({
      type: result.success ? 'success' : 'error',
      message: result.message
    });
    
    if (result.success) {
      setFormData({ name: '', email: '', message: '' });
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full p-5 rounded-md bg-white/5 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full p-5 rounded-md bg-white/5 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
        <label htmlFor="message" className="block text-sm font-medium text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md p-5 bg-white/5 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      {status.message && (
        <div className={`p-3 rounded-md ${
          status.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'
        }`}>
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-102 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;