import { motion } from 'framer-motion';

export const PopUpDraggable = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        scale: 0,
        rotate: -15,
      }}
      animate={{ opacity: 0, scale: 3, rotate: -15 }}
      transition={{
        delay: 5,
        duration: 2,
        type: 'spring',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 5,
      }}
      className="absolute top-5 text-customRecipesText text-accentMain"
    >
      <p>Drag Me</p>
    </motion.div>
  );
};
