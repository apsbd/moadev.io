'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsArrowRight, BsCheck, BsCode, BsPalette, BsGlobe, BsChat } from 'react-icons/bs';
import { FaMugHot } from 'react-icons/fa6';
import ServiceModal from '@/components/ServiceModal';

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Custom websites built with modern technologies for optimal performance and user experience.',
        fullDescription: 'Get a professionally designed, fully responsive website tailored to your needs. I build fast, SEO-friendly websites using the latest technologies like Next.js, React, and Tailwind CSS. Perfect for portfolios, business sites, landing pages, and more.',
        price: 'From $299',
        priceNote: 'starting price',
        deliveryTime: '1-2 weeks',
        includes: [
            'Fully responsive design (mobile, tablet, desktop)',
            'SEO optimization for better search rankings',
            'Fast loading performance',
            'Contact form integration',
            'Social media integration',
            '1 month of free support'
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        screenshots: [1, 2, 3],
        shopUrl: 'https://buymeacoffee.com/mohiuddinahmed',
        icon: BsGlobe
    },
    {
        num: '02',
        title: 'Full-Stack Application',
        description: 'Complete web applications with frontend, backend, and database integration.',
        fullDescription: 'Need more than just a website? I build complete web applications with user authentication, database integration, admin dashboards, and API development. From SaaS platforms to e-commerce stores, I deliver end-to-end solutions.',
        price: 'From $999',
        priceNote: 'starting price',
        deliveryTime: '2-4 weeks',
        includes: [
            'User authentication & authorization',
            'Database design & integration',
            'RESTful API development',
            'Admin dashboard',
            'Payment integration (Stripe)',
            'Email & notification systems',
            '3 months of free support'
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Prisma'],
        screenshots: [1, 2, 3, 4],
        shopUrl: 'https://buymeacoffee.com/mohiuddinahmed',
        icon: BsCode
    },
    {
        num: '03',
        title: 'UI/UX Design',
        description: 'Modern, intuitive designs that enhance user experience and drive conversions.',
        fullDescription: 'Transform your ideas into visually stunning designs. I create user interfaces that are not only beautiful but also intuitive and user-friendly. From wireframes to high-fidelity prototypes, I ensure your product looks and feels professional.',
        price: 'From $199',
        priceNote: 'starting price',
        deliveryTime: '3-5 days',
        includes: [
            'User research & analysis',
            'Wireframe creation',
            'High-fidelity mockups',
            'Responsive design variants',
            'Design system components',
            'Figma source files',
            '2 revisions included'
        ],
        technologies: ['Figma', 'Adobe XD', 'Tailwind CSS'],
        screenshots: [1, 2],
        shopUrl: 'https://buymeacoffee.com/mohiuddinahmed',
        icon: BsPalette
    },
    {
        num: '04',
        title: 'Code Review & Consultation',
        description: 'Expert code reviews and technical consultation to improve your codebase.',
        fullDescription: 'Get expert feedback on your code, architecture decisions, and technical challenges. I provide detailed code reviews with actionable recommendations, performance optimization tips, and best practices guidance.',
        price: 'From $99',
        priceNote: 'per session',
        deliveryTime: '1-2 days',
        includes: [
            'Detailed code review',
            'Performance optimization suggestions',
            'Security vulnerability check',
            'Architecture recommendations',
            'Best practices guidance',
            'Written report with findings',
            '30-min follow-up call'
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
        screenshots: [1],
        shopUrl: 'https://buymeacoffee.com/mohiuddinahmed',
        icon: BsChat
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300);
    };

    return (
        <>
            <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
                <div className='container mx-auto'>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.4 }}
                        className='text-center mb-12'
                    >
                        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                            My <span className='text-accent'>Services</span>
                        </h1>
                        <p className='text-white/60 max-w-2xl mx-auto'>
                            I offer professional web development, design, and consultation services.
                            Click on any service to learn more about what&apos;s included.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                delay: 2.6,
                                ease: 'easeIn'
                            }
                        }}
                        className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => openModal(service)}
                                    className='group relative bg-[#232329] rounded-2xl p-8 cursor-pointer overflow-hidden hover:bg-[#2a2a32] transition-all duration-500'
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Background Gradient */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                    {/* Content */}
                                    <div className='relative z-10'>
                                        {/* Icon & Number */}
                                        <div className='flex items-start justify-between mb-6'>
                                            <div className='w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors'>
                                                <Icon className='w-7 h-7 text-accent' />
                                            </div>
                                            <span className='text-4xl font-extrabold text-white/5 group-hover:text-accent/20 transition-all duration-500'>
                                                {service.num}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className='text-2xl font-bold text-white group-hover:text-accent transition-colors mb-3'>
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className='text-white/60 mb-6 line-clamp-2'>
                                            {service.description}
                                        </p>

                                        {/* Features Preview */}
                                        <div className='space-y-2 mb-6'>
                                            {service.includes.slice(0, 3).map((item, idx) => (
                                                <div key={idx} className='flex items-center gap-2 text-sm text-white/50'>
                                                    <BsCheck className='text-accent flex-shrink-0' />
                                                    <span className='truncate'>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Row */}
                                        <div className='flex items-center justify-between pt-4 border-t border-white/10'>
                                            <div>
                                                <span className='text-2xl font-bold text-accent'>
                                                    {service.price}
                                                </span>
                                                {service.priceNote && (
                                                    <span className='text-white/40 text-sm ml-2'>
                                                        {service.priceNote}
                                                    </span>
                                                )}
                                            </div>
                                            <div className='flex items-center gap-2 text-white/60 group-hover:text-accent transition-colors'>
                                                <span className='text-sm'>View Details</span>
                                                <BsArrowRight className='group-hover:translate-x-1 transition-transform' />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Border */}
                                    <div className='absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-all duration-500 pointer-events-none' />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.4,
                                delay: 2.8,
                                ease: 'easeIn'
                            }
                        }}
                        className='flex flex-col items-center gap-4'
                    >
                        <p className='text-white/50 text-sm'>
                            Need something custom? Let&apos;s discuss your project.
                        </p>
                        <a
                            href='https://buymeacoffee.com/mohiuddinahmed'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/80 transition-all duration-300 hover:scale-105 group'
                        >
                            <FaMugHot className='text-xl' />
                            <span className='font-semibold'>View All Services</span>
                            <BsArrowRight className='group-hover:translate-x-1 transition-transform' />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Service Modal */}
            <ServiceModal
                service={selectedService}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default Services;