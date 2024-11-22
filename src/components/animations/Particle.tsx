import { motion } from "framer-motion";

interface ParticleProps {
  color: string;
  size?: number;
}

export const Particle = ({ color, size = 2 }: ParticleProps) => {
  const randomX = Math.random() * 100 - 50;
  const randomY = Math.random() * 100 - 50;
  
  return (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={{
        scale: [0, 1, 0],
        x: randomX,
        y: randomY,
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    />
  );
};
