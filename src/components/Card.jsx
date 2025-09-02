import { motion } from "motion/react";
const Card = ({style,text,containerRef}) => {
  return( <motion.div className="absolute px-1 py-1 text-xl text-center rounded-full ring ring-grey-700 font-extralight bg-storm w-[12rem] cursor-grab" style={style}
  whileHover={{ scale:1.07}}
  drag 
  dragConstraints={containerRef}
  dragElastic={1}> {text}
  </motion.div>
);

};

export default Card;