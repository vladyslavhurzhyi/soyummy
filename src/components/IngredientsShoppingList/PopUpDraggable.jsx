import { motion } from 'framer-motion';

export const PopUpDraggable = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 5,
        duration: 2,
        type: 'spring',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 5,
      }}
      className="absolute top-3 rotate-[20deg] animate-ping text-customRecipesText text-accentMain"
    >
      <p>Drag Me</p>
    </motion.div>
  );
};
