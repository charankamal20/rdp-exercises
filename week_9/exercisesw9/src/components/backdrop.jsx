import React from 'react';
import { motion } from 'framer-motion';

function Backdrop({children, onClick}) {
  return (
    <motion.div className='absolute top-0 left-0 bg-black/20 w-full h-full flex justify-center items-center'
        onClick={() => onClick(false)}
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
        {children}
    </motion.div>
  )
}

export default Backdrop