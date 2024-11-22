import { motion } from "framer-motion";

interface AnimatedProgressBarProps {
  value: number;
  color: string;
  height?: string;
}

export const AnimatedProgressBar = ({ value, color, height = "h-2" }: AnimatedProgressBarProps) => (
  <div className={`w-full bg-gray-700 rounded-full ${height} mb-4 overflow-hidden`}>
    <motion.div
      className={`h-full rounded-full ${color}`}
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut",
        bounce: 0.25
      }}
    />
  </div>
);
