'use client';

import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from 'next/image';

const projects = [
    {
        num: '01',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with Next.js, featuring product management, shopping cart, payment integration, and admin dashboard.',
        technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
        image: '/assets/work/project1.jpg',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        num: '02',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking capabilities.',
        technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        image: '/assets/work/project2.jpg',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        num: '03',
        title: 'AI Content Generator',
        description: 'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI API.',
        technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Tailwind'],
        image: '/assets/work/project3.jpg',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        num: '04',
        title: 'Real Estate Listing Platform',
        description: 'A modern real estate platform with property listings, advanced search filters, virtual tours, and agent management system.',
        technologies: ['React', 'Express', 'MongoDB', 'Mapbox'],
        image: '/assets/work/project4.jpg',
        liveUrl: '#',
        githubUrl: '#'
    }
];

const Work = () => {
    return (
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
                        <div
                            key={index}
                            className='group relative bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2a2a32] transition-all duration-500'
                        >
                            {/* Project Number */}
                            <div className='absolute top-4 left-4 z-10'>
                                <span className='text-5xl font-extrabold text-outline text-transparent group-hover:text-accent group-hover:text-outline-hover transition-all duration-500'>
                                    {project.num}
                                </span>
                            </div>

                            {/* Project Image Placeholder */}
                            <div className='relative h-48 bg-[#1c1c22] overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#232329]/90 z-10' />
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
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className='flex gap-4'>
                                    <a
                                        href={project.liveUrl}
                                        className='flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-all duration-300'
                                    >
                                        <span>Live Demo</span>
                                        <BsArrowUpRight className='text-lg' />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className='flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-all duration-300'
                                    >
                                        <span>GitHub</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.118.369.828.129 4.77-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className='absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-all duration-500 pointer-events-none' />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Work;