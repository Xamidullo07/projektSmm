import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { TestimonialType } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.course}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"} 
          />
        ))}
      </div>
      
      <p className="text-muted-foreground">{testimonial.comment}</p>
    </motion.div>
  );
};

export default TestimonialCard;