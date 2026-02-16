import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// Components
import Socials from '@/components/Socials';

const Home = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto h-full px-4'>
                <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                    {/* text */}
                    <div className='text-center xl:text-left'>
                        <span className='text-xl'>Software Developer</span>
                        <h1 className='h1 mb-6'>
                            Hello I'm <br />{' '}
                            <span className='text-accent'>Mohiuddin Ahmed</span>
                        </h1>
                        <p className='max-w-125 mb-9 text-white/80'>
                            I am a software developer with experience in
                            building web applications using modern technologies.
                            I am passionate about learning new technologies and
                            improving my skills. I am always looking for new
                            opportunities to grow and develop as a software
                            developer.
                        </p>
                        {/* buttons & socials */}
                        <div className='flex flex-col xl:flex-row items-center gap-8'>
                            <Button
                                variant='outline'
                                size='lg'
                                className='uppercase flex items-center gap-2'>
                                <span>Download CV</span>
                                <FiDownload className='text-xl' />
                            </Button>
                            <div className='mb-8 xl:mb-0'>
                                <Socials
                                    containerStyles='flex gap-6'
                                    iconStyles='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-background hover:transition-all duration-500'
                                />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div>photo</div>
                </div>
            </div>
        </section>
    );
};

export default Home;
