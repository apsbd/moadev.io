'use client';

import { motion } from 'framer-motion';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';

const projects = [
    {
        num: '01',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with Next.js.',
        fullDescription: 'A comprehensive e-commerce solution designed for modern businesses. This platform features a seamless shopping experience with advanced product filtering, secure payment processing, and an intuitive admin dashboard for managing inventory, orders, and customers.',
        features: [
            'Product catalog with advanced search and filtering',
            'Secure checkout with Stripe integration',
            'Real-time inventory management',
            'Customer accounts and order tracking',
            'Admin dashboard with analytics',
            'Responsive design for all devices'
        ],
        technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB', 'NextAuth.js'],
        screenshots: [1, 2, 3, 4],
        image: '/assets/work/project1.jpg',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        num: '02',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
        fullDescription: 'A powerful task management application built for teams and individuals. Features real-time collaboration, customizable workflows, and detailed progress tracking to help teams stay organized and productive.',
        features: [
            'Real-time collaboration with team members',
            'Drag-and-drop task organization',
            'Custom project boards and workflows',
            'Time tracking and reporting',
            'File attachments and comments',
            'Email and push notifications'
        ],
        technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
        screenshots: [1, 2, 3],
        image: '/assets/work/project2.jpg',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        num: '03',
        title: 'AI Content Generator',
        description: 'An AI-powered content generation tool using OpenAI API.',
        fullDescription: 'An intelligent content creation platform that leverages OpenAI\'s GPT models to help marketers, bloggers, and businesses generate high-quality content efficiently. Includes templates for various content types and tone customization.',
        features: [
            'Multiple content templates (blogs, ads, emails)',
            'Tone and style customization',
            'SEO optimization suggestions',
            'Content history and favorites',
            'Team collaboration features',
            'API integration capabilities'
        ],
        technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Tailwind', 'PostgreSQL'],
        screenshots: [1, 2, 3, 4],
        image: '/assets/work/project3.jpg',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        num: '04',
        title: 'Real Estate Platform',
        description: 'A modern real estate platform with property listings and virtual tours.',
        fullDescription: 'A cutting-edge real estate platform that connects buyers, sellers, and agents. Features include interactive property listings, virtual 3D tours, advanced map-based search, and a comprehensive agent management system.',
        features: [
            'Interactive property search with maps',
            'Virtual 3D property tours',
            'Mortgage calculator integration',
            'Agent profiles and reviews',
            'Saved searches and alerts',
            'Mobile-optimized experience'
        ],
        technologies: ['React', 'Express', 'MongoDB', 'Mapbox', 'Three.js'],
        screenshots: [1, 2, 3],
        image: '/assets/work/project4.jpg',
        liveUrl: '#',
        githubUrl: '#'
    }
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
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
                        className='grid grid-cols-1 md:grid-cols-2 gap-8'
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                onClick={() => openModal(project)}
                                className='group relative bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2a2a32] transition-all duration-500 cursor-pointer'
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Project Number */}
                                <div className='absolute top-4 left-4 z-10'>
                                    <span className='text-5xl font-extrabold text-outline text-transparent group-hover:text-accent group-hover:text-outline-hover transition-all duration-500'>
                                        {project.num}
                                    </span>
                                </div>

                                {/* Project Image Placeholder */}
                                <div className='relative h-48 bg-[#1c1c22] overflow-hidden'>
                                    <div className='absolute inset-0 bg-linear-to-b from-transparent to-[#232329]/90 z-10' />
                                    <div className='w-full h-full flex items-center justify-center text-white/20 text-6xl'>
                                        {/* Placeholder icon if no image */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    {/* Title */}
                                    <h2 className='text-2xl font-bold text-white group-hover:text-accent transition-all duration-500 mb-3'>
                                        {project.title}
                                    </h2>

                                    {/* Description */}
                                    <p className='text-white/60 mb-4 line-clamp-2'>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className='px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className='px-3 py-1 text-xs bg-white/5 text-white/50 rounded-full'>
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* View Details Indicator */}
                                    <div className='flex items-center gap-2 text-sm text-white/70 group-hover:text-accent transition-all duration-300'>
                                        <span>View Details</span>
                                        <BsArrowRight className='text-lg group-hover:translate-x-1 transition-transform' />
                                    </div>
                                </div>

                                {/* Hover Border Effect */}
                                <div className='absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-all duration-500 pointer-events-none' />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default Work;