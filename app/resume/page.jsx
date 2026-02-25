'use client';

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaFigma,
    FaAws,
    FaDigitalOcean,
    FaLaravel
} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiShadcnui,
    SiNextdotjs,
    SiN8N,
    SiKubernetes
} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { easeIn, motion } from 'framer-motion';
import { div } from 'three/src/nodes/math/OperatorNode';

// about data
const about = {
    title: 'About Me',
    description:
        'I am a passionate web developer with expertise in HTML, CSS, JavaScript, React, Node.js, and more. I have a strong background in building responsive and user-friendly web applications. I am always eager to learn new technologies and stay updated with the latest trends in web development.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Mohiuddin Ahmed'
        },
        {
            fieldName: 'Phone/WhatsApp',
            fieldValue: '+8801712345678'
        },
        {
            fieldName: 'Experience',
            fieldValue: '15+ Years'
        },
        {
            fieldName: 'Microsoft Teams',
            fieldValue: 'mohiuddin.ahmed.07'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Bangladeshi'
        },
        { fieldName: 'Email', fieldValue: 'mohiuddin.ahmed@example.com' }
        ,
        {
            fieldName: 'Address',
            fieldValue: 'Dhaka, Bangladesh'
        },
        {
            fieldName: 'Language',
            fieldValue: 'English, Bangla'
        }
    ]
};

// experience data
const experience = {
    icon: '/assets/resume/gadge.svg',
    title: 'Experience',
    description:
        'I have worked on various projects, ranging from small business websites to large-scale web applications. My experience includes developing e-commerce platforms, content management systems, and custom web solutions for clients across different industries.',
    items: [
        {
            title: 'Senior Web Developer',
            company: 'Tech Solutions Inc.',
            duration: '2018 - Present',
            description:
                'Lead the development of multiple web applications using React and Node.js. Collaborate with cross-functional teams to deliver high-quality products on time.'
        },
        {
            title: 'Web Developer',
            company: 'Creative Web Agency',
            duration: '2015 - 2018',
            description:
                'Developed responsive websites and web applications for various clients. Worked closely with designers to implement user-friendly interfaces.'
        },
        {
            title: 'Junior Web Developer',
            company: 'Startup Hub',
            duration: '2010 - 2015',
            description:
                'Assisted in the development of web applications and maintained existing websites. Gained valuable experience in front-end and back-end development.'
        }
    ]
};

// education data
const education = {
    icon: '/assets/resume/education.svg',
    title: 'Education',
    description:
        "I hold a Bachelor's degree in Computer Science from XYZ University. During my academic years, I gained a solid foundation in programming, algorithms, and software development principles. I also completed several projects that allowed me to apply my knowledge in real-world scenarios.",
    items: [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'XYZ University',
            duration: '2006 - 2010',
            description:
                'Graduated with honors. Completed coursework in web development, database management, and software engineering.'
        }
    ]
};

// skills data
const skills = {
    title: 'My Skills',
    description:
        'I possess a diverse set of skills that enable me to excel in web development. My technical skills include proficiency in HTML, CSS, JavaScript, React, Node.js, and various other frameworks and tools. I am also adept at problem-solving and have strong communication skills, which allow me to effectively collaborate with team members and clients.',
    items: [
        {
            name: 'HTML5',
            icon: <FaHtml5 />
        },
        {
            name: 'CSS3',
            icon: <FaCss3 />
        },
        {
            name: 'JavaScript',
            icon: <FaJs />
        },
        {
            name: 'React',
            icon: <FaReact />
        },
        {
            name: 'Node.js',
            icon: <FaNodeJs />
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />
        },
        {
            name: 'Shadcn UI',
            icon: <SiShadcnui />
        },
        {
            name: 'Next.js',
            icon: <SiNextdotjs />
        },
        {
            name: 'n8n',
            icon: <SiN8N />
        },
        {
            name: 'Kubernetes',
            icon: <SiKubernetes />
        },
        {
            name: 'Figma',
            icon: <FaFigma />
        },
        {
            name: 'AWS',
            icon: <FaAws />
        },
        {
            name: 'DigitalOcean',
            icon: <FaDigitalOcean />
        },
        {
            name: 'Laravel',
            icon: <FaLaravel />
        }
    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: easeIn }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
                <Tabs
                    orientation='vertical'
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-15'>
                    <TabsList className='flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6 bg-transparent border-0 rounded-lg mb-10 xl:mb-0'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About Me</TabsTrigger>
                    </TabsList>
                    {/* contents */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-100'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7.5'>
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className='bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start pag-1'>
                                                <span className='text-accent'>
                                                    {item.duration}
                                                </span>
                                                <h3 className='text-xl max-w-65 min-h-15 text-center lg:text-left'>
                                                    {item.title}
                                                </h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-100'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7.5'>
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className='bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start pag-1'>
                                                <span className='text-accent'>
                                                    {item.duration}
                                                </span>
                                                <h3 className='text-xl max-w-65 min-h-15 text-center lg:text-left'>
                                                    {item.degree}
                                                </h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>
                                                        {item.institution}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value='skills' className='w-full'>
                            <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {skills.title}
                                </h3>
                                <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>
                                    {skills.description}
                                </p>
                                <ScrollArea className='h-100 w-full'>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-7.5 gap-4'>
                                        {skills.items.map((item, index) => (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-37.5 bg-[#232329] rounded-xl flex items-center justify-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                {item.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className='capitalize'>
                                                            {item.name}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value='about' className='w-full'>
                            <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {about.title}
                                </h3>
                                <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li
                                            key={index}
                                            className='flex items-center gap-3 justify-center xl:justify-start'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
                                            <p className='text-white/60'>
                                                {item.fieldName}:{' '}
                                                <span className='text-white'>
                                                    {item.fieldValue}
                                                </span>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
