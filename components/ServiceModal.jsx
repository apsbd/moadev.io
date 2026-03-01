'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { BsArrowLeft, BsArrowRight, BsX, BsArrowUpRight } from 'react-icons/bs';

const ServiceModal = ({ service, isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const nextSlide = useCallback(() => {
        if (service?.screenshots) {
            setCurrentSlide((prev) => (prev + 1) % service.screenshots.length);
        }
    }, [service?.screenshots]);

    const prevSlide = useCallback(() => {
        if (service?.screenshots) {
            setCurrentSlide((prev) => (prev - 1 + service.screenshots.length) % service.screenshots.length);
        }
    }, [service?.screenshots]);

    // Reset slide when modal opens
    useEffect(() => {
        if (isOpen) setCurrentSlide(0);
    }, [isOpen]);

    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8'
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className='absolute inset-0 bg-black/80 backdrop-blur-sm' />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className='relative w-full max-w-5xl max-h-[90vh] bg-[#1c1c22] rounded-2xl overflow-hidden shadow-2xl'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className='absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors'
                        >
                            <BsX className='w-6 h-6' />
                        </button>

                        <div className='flex flex-col lg:flex-row h-full max-h-[90vh] overflow-auto'>
                            {/* Slider Section */}
                            <div className='relative w-full lg:w-1/2 bg-[#232329]'>
                                <div className='relative aspect-video lg:aspect-auto lg:h-full'>
                                    <AnimatePresence mode='wait'>
                                        <motion.div
                                            key={currentSlide}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.3 }}
                                            className='absolute inset-0 flex items-center justify-center'
                                        >
                                            <div className='w-full h-full bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center'>
                                                <div className='text-center p-8'>
                                                    <div className='w-full h-full flex items-center justify-center text-white/30'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <p className='text-white/50 text-sm mt-2'>
                                                        Screenshot {currentSlide + 1}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    {service.screenshots?.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    prevSlide();
                                                }}
                                                className='absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10'
                                            >
                                                <BsArrowLeft className='w-5 h-5' />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    nextSlide();
                                                }}
                                                className='absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10'
                                            >
                                                <BsArrowRight className='w-5 h-5' />
                                            </button>
                                        </>
                                    )}

                                    {/* Slide Indicators */}
                                    {service.screenshots?.length > 1 && (
                                        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                                            {service.screenshots.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentSlide(index);
                                                    }}
                                                    className={`w-2 h-2 rounded-full transition-all ${
                                                        currentSlide === index
                                                            ? 'bg-accent w-4'
                                                            : 'bg-white/50 hover:bg-white/70'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className='w-full lg:w-1/2 p-6 md:p-8 overflow-y-auto'>
                                {/* Service Number & Title */}
                                <div className='mb-6'>
                                    <span className='text-accent text-sm font-medium'>
                                        Service {service.num}
                                    </span>
                                    <h2 className='text-3xl md:text-4xl font-bold text-white mt-2'>
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Price */}
                                {service.price && (
                                    <div className='mb-6'>
                                        <span className='text-4xl font-bold text-accent'>
                                            {service.price}
                                        </span>
                                        {service.priceNote && (
                                            <span className='text-white/50 text-sm ml-2'>
                                                {service.priceNote}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Description */}
                                <div className='mb-6'>
                                    <h3 className='text-lg font-semibold text-white mb-3'>
                                        About this service
                                    </h3>
                                    <p className='text-white/70 leading-relaxed'>
                                        {service.fullDescription || service.description}
                                    </p>
                                </div>

                                {/* What's Included */}
                                {service.includes && (
                                    <div className='mb-6'>
                                        <h3 className='text-lg font-semibold text-white mb-3'>
                                            What&apos;s Included
                                        </h3>
                                        <ul className='space-y-2'>
                                            {service.includes.map((item, index) => (
                                                <li key={index} className='flex items-start gap-2 text-white/70'>
                                                    <span className='text-accent mt-1'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                {service.technologies && (
                                    <div className='mb-6'>
                                        <h3 className='text-lg font-semibold text-white mb-3'>
                                            Technologies
                                        </h3>
                                        <div className='flex flex-wrap gap-2'>
                                            {service.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className='px-4 py-2 text-sm bg-accent/10 text-accent rounded-full border border-accent/20'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Delivery Time */}
                                {service.deliveryTime && (
                                    <div className='mb-6 p-4 bg-white/5 rounded-lg'>
                                        <div className='flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className='text-white/70'>
                                                Delivery: <span className='text-white font-medium'>{service.deliveryTime}</span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <div className='flex gap-4 pt-4 border-t border-white/10'>
                                    <a
                                        href={service.shopUrl || 'https://buymeacoffee.com/mohiuddinahmed'}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors'
                                    >
                                        <span>Order Now</span>
                                        <BsArrowUpRight className='text-lg' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;