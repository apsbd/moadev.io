'use client';

import { motion } from 'framer-motion';
import { BsSend, BsGeoAlt, BsEnvelope, BsPhone } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const contactInfo = [
    {
        icon: <BsEnvelope className='text-xl' />,
        title: 'Email',
        value: 'mohiuddin.ahmed@example.com',
        href: 'mailto:mohiuddin.ahmed@example.com'
    },
    {
        icon: <BsPhone className='text-xl' />,
        title: 'Phone',
        value: '+880 1712 345678',
        href: 'tel:+8801712345678'
    },
    {
        icon: <BsGeoAlt className='text-xl' />,
        title: 'Location',
        value: 'Dhaka, Bangladesh',
        href: '#'
    }
];

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com',
        label: 'GitHub'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://linkedin.com',
        label: 'LinkedIn'
    },
    {
        icon: <FaYoutube />,
        path: 'https://youtube.com',
        label: 'YouTube'
    },
    {
        icon: <FaTwitter />,
        path: 'https://twitter.com',
        label: 'Twitter'
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Add your form submission logic here
        // For now, just simulate a delay
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
            alert('Message sent successfully!');
        }, 1000);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 2.4,
                    ease: 'easeIn'
                }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    {/* Contact Info */}
                    <div className='xl:w-[30%] order-2 xl:order-1'>
                        <div className='bg-[#232329] rounded-xl p-8 h-full'>
                            <h3 className='text-3xl font-bold text-white mb-8'>
                                Get in Touch
                            </h3>
                            <p className='text-white/60 mb-8'>
                                Feel free to reach out for collaborations, project inquiries, or just to say hello. I'm always open to discussing new opportunities.
                            </p>

                            {/* Contact Details */}
                            <div className='flex flex-col gap-6 mb-8'>
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className='flex items-center gap-4 group'
                                    >
                                        <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300'>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className='text-white/60 text-sm'>{item.title}</p>
                                            <p className='text-white group-hover:text-accent transition-all duration-300'>
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className='text-white/60 text-sm mb-4'>Follow Me</h4>
                                <div className='flex gap-4'>
                                    {socials.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.path}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300'
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='xl:w-[70%] order-1 xl:order-2'>
                        <div className='bg-[#232329] rounded-xl p-8 h-full'>
                            <h3 className='text-3xl font-bold text-white mb-2'>
                                Send a Message
                            </h3>
                            <p className='text-white/60 mb-8'>
                                Have a project in mind? Let's work together.
                            </p>

                            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='text-white/60 text-sm mb-2 block'>
                                            Your Name
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='John Doe'
                                            required
                                            className='w-full bg-[#1c1c22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all duration-300'
                                        />
                                    </div>
                                    <div>
                                        <label className='text-white/60 text-sm mb-2 block'>
                                            Your Email
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='john@example.com'
                                            required
                                            className='w-full bg-[#1c1c22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all duration-300'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-white/60 text-sm mb-2 block'>
                                        Subject
                                    </label>
                                    <input
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder='Project Inquiry'
                                        required
                                        className='w-full bg-[#1c1c22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all duration-300'
                                    />
                                </div>

                                <div>
                                    <label className='text-white/60 text-sm mb-2 block'>
                                        Message
                                    </label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Tell me about your project...'
                                        required
                                        rows={5}
                                        className='w-full bg-[#1c1c22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all duration-300 resize-none'
                                    />
                                </div>

                                <Button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full md:w-auto bg-accent text-background hover:bg-accent/80 font-semibold uppercase flex items-center justify-center gap-2 py-6 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <BsSend className='text-lg' />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;