'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { BsArrowLeft, BsArrowRight, BsX, BsArrowUpRight, BsGithub } from 'react-icons/bs';

const ProjectModal = ({ project, isOpen, onClose }) => {
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
        if (project?.screenshots) {
            setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
        }
    }, [project?.screenshots]);

    const prevSlide = useCallback(() => {
        if (project?.screenshots) {
            setCurrentSlide((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
        }
    }, [project?.screenshots]);

    // Reset slide when modal opens
    useEffect(() => {
        if (isOpen) setCurrentSlide(0);
    }, [isOpen]);

    if (!project) return null;

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
                                            {project.screenshots?.[currentSlide] ? (
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
                                            ) : (
                                                <div className='w-full h-full flex items-center justify-center text-white/20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    {project.screenshots?.length > 1 && (
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
                                    {project.screenshots?.length > 1 && (
                                        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                                            {project.screenshots.map((_, index) => (
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
                                {/* Project Number & Title */}
                                <div className='mb-6'>
                                    <span className='text-accent text-sm font-medium'>
                                        Project {project.num}
                                    </span>
                                    <h2 className='text-3xl md:text-4xl font-bold text-white mt-2'>
                                        {project.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <div className='mb-6'>
                                    <h3 className='text-lg font-semibold text-white mb-3'>
                                        About this project
                                    </h3>
                                    <p className='text-white/70 leading-relaxed'>
                                        {project.fullDescription || project.description}
                                    </p>
                                </div>

                                {/* Features */}
                                {project.features && (
                                    <div className='mb-6'>
                                        <h3 className='text-lg font-semibold text-white mb-3'>
                                            Key Features
                                        </h3>
                                        <ul className='space-y-2'>
                                            {project.features.map((feature, index) => (
                                                <li key={index} className='flex items-start gap-2 text-white/70'>
                                                    <span className='text-accent mt-1'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                <div className='mb-6'>
                                    <h3 className='text-lg font-semibold text-white mb-3'>
                                        Technologies Used
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className='px-4 py-2 text-sm bg-accent/10 text-accent rounded-full border border-accent/20'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className='flex gap-4 pt-4 border-t border-white/10'>
                                    <a
                                        href={project.liveUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors'
                                    >
                                        <span>Live Demo</span>
                                        <BsArrowUpRight className='text-lg' />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors'
                                    >
                                        <span>GitHub</span>
                                        <BsGithub className='text-lg' />
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

export default ProjectModal;