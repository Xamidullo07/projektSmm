import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = "Ro'yxatdan o'tish - Abdulloh SMM";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon raqam kiritish majburiy';
    }
    
    if (!formData.password) {
      newErrors.password = 'Parol kiritish majburiy';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parollar mos kelmadi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        // Navigate to dashboard or show error
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center justify-center">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Ro'yxatdan o'tish</h1>
              <p className="text-muted-foreground">
                Abdulloh SMM platformasiga xush kelibsiz
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Ism <span className="text-destructive">*</span>
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
                    placeholder="example@mail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefon <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-muted border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="+998 90 123 45 67"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Parol <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-muted border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all ${
                        errors.password ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Parolingizni kiriting"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-destructive">{errors.password}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                    Parolni tasdiqlash <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-muted border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all ${
                        errors.confirmPassword ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Parolni qayta kiriting"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-destructive">{errors.confirmPassword}</p>
                  )}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 bg-muted border border-border rounded focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-muted-foreground">
                    Men <a href="#" className="text-primary hover:underline">foydalanish shartlari</a> bilan tanishdim
                  </label>
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
                      Ro'yxatdan o'tish
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Hisobingiz bormi?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Kirish
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;