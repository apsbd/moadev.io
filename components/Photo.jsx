'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 0.4,
                        ease: 'easeInOut'
                    }
                }}
                className='w-74.5 h-74.5 xl:w-124.5 xl:h-124.5 mix-blend-lighten'>
                <Image
                    src='/assets/ahmed.png'
                    priority
                    width={498}
                    height={498}
                    alt='Photo of Ahmed'
                    className='object-contain'
                />
            </motion.div>
        </div>
    );
};

export default Photo;
