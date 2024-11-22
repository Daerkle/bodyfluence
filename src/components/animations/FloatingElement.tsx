import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingElement = ({ children, delay = 0, className = "" }: FloatingElementProps) => (
  <motion.div
    className={className}
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration: 6,
      delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    {children}
  </motion.div>
);
