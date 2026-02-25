'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        num: '01',
        title: 'Web Development',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        href: ''
    },
    {
        num: '02',
        title: 'Mobile App Development',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        href: ''
    },
    {
        num: '03',
        title: 'Web Application',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        href: ''
    },
    {
        num: '04',
        title: 'UI/UX Design',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
        href: ''
    }
];

const Services = () => {
    return (
        <section className='flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            delay: 2.4,
                            ease: 'easeIn'
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-15'
                >
                    {services.map((service, index) => (
                        <div key={index} className='flex flex-1 flex-col justify-center gap-6 group'>
                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-accent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                <Link
                                    href={service.href}
                                    className='w-17.5 h-17.5 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-background text-3xl' />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                            <p className='text-white/60'>{service.description}</p>
                            {/* border */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
