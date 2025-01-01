import { EmailData } from '../types/email';

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, you would send this to your backend
    // For now, we'll simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Email sent:', data);
    return { 
      success: true, 
      message: 'Message sent successfully! I will get back to you soon.' 
    };
  } catch (error) {
    return { 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    };
  }
};