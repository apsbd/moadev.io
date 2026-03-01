"use client";

import { Button } from '@/components/ui/button';
import { FiBriefcase } from 'react-icons/fi';

// Components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import {motion} from 'framer-motion';
import TypingText from '@/components/TypingText';


const Home = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto h-full px-4 xl:px-0'>
                <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                    {/* text */}
                    <div className='text-center xl:text-left order-2 xl:order-0'>
                        <TypingText />
                        <h1 className='h1 mb-6'>
                            Hello I'm <br />{' '}
                            <span className='text-accent'>Mohiuddin Ahmed</span>
                        </h1>
                        <p className='max-w-125 mb-9 text-white/80'>
                            Full-stack developer with 15+ years of experience
                            building scalable web applications and digital products.
                            I specialize in React, Next.js, and Node.js, helping
                            businesses transform ideas into powerful software solutions.
                        </p>
                        {/* buttons & socials */}
                        <div className='flex flex-col xl:flex-row items-center gap-8'>
                            <a href='https://buymeacoffee.com/mohiuddinahmed/shop' target='_blank' rel='noopener noreferrer'>
                                <Button
                                    variant='outline'
                                    size='lg'
                                    className='uppercase flex items-center gap-2'>
                                    <FiBriefcase className='text-xl' />
                                    <span>Work With Me</span>
                                </Button>
                            </a>
                            <div className='mb-8 xl:mb-0'>
                                <Socials
                                    containerStyles='flex gap-6'
                                    iconStyles='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-background hover:transition-all duration-500'
                                />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className='order-1 xl:order-0 mb-8 xl:mb-0'>
                        <Photo />
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className='container mx-auto px-4 xl:px-0 pb-8'>
                <Stats />
            </motion.div>
        </section>
    );
};

export default Home;
