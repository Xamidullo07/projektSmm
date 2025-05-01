import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ism kiritish majburiy';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email kiritish majburiy';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Yaroqli email manzil kiriting';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Xabar kiritish majburiy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="card">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 text-center"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Xabaringiz yuborildi!</h3>
          <p className="text-muted-foreground">
            Tez orada siz bilan bog'lanamiz. Murojaatingiz uchun rahmat!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6">Bizga xabar yuboring</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Ismingiz <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-muted border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all ${
                  errors.name ? 'border-destructive' : 'border-border'
                }`}
                placeholder="To'liq ismingiz"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-muted border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all ${
                  errors.email ? 'border-destructive' : 'border-border'
                }`}
                placeholder="sizning@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Telefon raqam
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                placeholder="+998 90 123 45 67"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Xabar <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-2 bg-muted border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all ${
                  errors.message ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Xabaringizni kiriting..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Yuklanmoqda...
                </>
              ) : (
                <>
                  Yuborish
                  <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;