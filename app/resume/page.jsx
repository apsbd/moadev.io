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
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-15 '>
                    <TabsList>
                        <TabsTrigger>Experience</TabsTrigger>
                        <TabsTrigger>Education</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                        <TabsTrigger>About Me</TabsTrigger>
                    </TabsList>

                    {/* contents */}
                    <div className='w-full'>
                        contents
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
