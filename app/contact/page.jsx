'use client';

import { motion } from 'framer-motion';
import { BsGeoAlt, BsEnvelope, BsPhone } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
    {
        icon: <BsEnvelope className='text-xl' />,
        title: 'Email',
        value: 'devmoa@proton.me',
        href: 'mailto:devmoa@proton.me'
    },
    {
        icon: <BsPhone className='text-xl' />,
        title: 'Phone',
        value: '+8801888568593',
        href: 'tel:+8801888568593'
    },
    {
        icon: <BsGeoAlt className='text-xl' />,
        title: 'Location',
        value: 'Dhaka, Bangladesh',
        href: null
    }
];

const socials = [
    {
        icon: <FaGithub className='text-xl' />,
        path: 'https://github.com/apsbd',
        label: 'GitHub',
        handle: 'github.com/apsbd'
    },
    {
        icon: <FaLinkedin className='text-xl' />,
        path: 'https://linkedin.com/in/mohiuddin-ahmed-07',
        label: 'LinkedIn',
        handle: 'linkedin.com/in/mohiuddin-ahmed-07'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex items-center py-12 xl:py-0'>
            <div className='container mx-auto px-4'>
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    className='max-w-2xl mx-auto'>

                    {/* Header */}
                    <motion.div variants={itemVariants} className='mb-10'>
                        <p className='text-accent text-sm font-medium uppercase tracking-widest mb-3'>Contact</p>
                        <h1 className='h1 mb-4'>
                            Get in <span className='text-accent'>Touch</span>
                        </h1>
                        <p className='text-white/60 text-base leading-relaxed border-l-2 border-accent/40 pl-4'>
                            Open to architecture consulting, AI product collaborations, and new opportunities. Reach out directly via any of the channels below.
                        </p>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div variants={itemVariants} className='bg-[#232329] rounded-xl p-8 mb-6'>
                        <h3 className='text-xs uppercase tracking-widest text-white/40 font-medium mb-6'>Direct Contact</h3>
                        <div className='flex flex-col gap-5'>
                            {contactInfo.map((item, index) => {
                                const inner = (
                                    <div className='flex items-center gap-4 group'>
                                        <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 shrink-0'>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className='text-white/50 text-xs uppercase tracking-wider mb-0.5'>{item.title}</p>
                                            <p className='text-white group-hover:text-accent transition-colors duration-300 font-medium'>
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                                return item.href ? (
                                    <a key={index} href={item.href}>{inner}</a>
                                ) : (
                                    <div key={index}>{inner}</div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Social / Professional Profiles */}
                    <motion.div variants={itemVariants} className='bg-[#232329] rounded-xl p-8'>
                        <h3 className='text-xs uppercase tracking-widest text-white/40 font-medium mb-6'>Profiles</h3>
                        <div className='flex flex-col gap-5'>
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-4 group'>
                                    <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 shrink-0'>
                                        {social.icon}
                                    </div>
                                    <div>
                                        <p className='text-white/50 text-xs uppercase tracking-wider mb-0.5'>{social.label}</p>
                                        <p className='text-white group-hover:text-accent transition-colors duration-300 font-medium'>
                                            {social.handle}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
