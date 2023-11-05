import { motion } from 'framer-motion'
import React from 'react'


export const WithFadeIn = (WrappedComponent) => {

    return function  WithFadeIn(props) {
        return (
            <motion.div className='w-full flex justify-center items-center'
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}

                // transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                // style={{ x: 100 }}
            >
                <WrappedComponent {...props} />
            </motion.div>
        )
    } 
}
