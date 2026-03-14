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
    FaLaravel,
    FaGithub,
    FaLinkedin,
    FaDownload
} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiShadcnui,
    SiNextdotjs,
    SiN8N,
    SiKubernetes,
    SiTypescript,
    SiMongodb,
    SiPostgresql
} from 'react-icons/si';
import { motion } from 'framer-motion';

// hero description
const heroDescription = 'I am a passionate web developer with expertise in HTML, CSS, JavaScript, React, Node.js, and more. I have a strong background in building responsive and user-friendly web applications. I am always eager to learn new technologies and stay updated with the latest trends in web development.';

// experience data
const experience = {
    title: 'Experience',
    items: [
        {
            title: 'Senior Frontend Developer',
            company: 'NRB Global Tech Ltd',
            duration: 'Nov 2022 - Present',
            location: 'Dhaka, Bangladesh',
            description:
                'Working on enterprise-level web applications using React, Next.js, and TypeScript. Implemented complex UI components and improved application performance by 40%. Led the migration from JavaScript to TypeScript.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
        },
        {
            title: 'Frontend Developer',
            company: 'Brain Station 23',
            duration: 'Mar 2019 - Oct 2022',
            location: 'Dhaka, Bangladesh',
            description:
                'Developed and maintained multiple client projects using React and Vue.js. Collaborated with design teams to create responsive and accessible web interfaces. Mentored junior developers in best practices.',
            technologies: ['React', 'Vue.js', 'JavaScript', 'SCSS']
        },
        {
            title: 'Junior Web Developer',
            company: 'Tech Mahindra',
            duration: 'Jan 2017 - Feb 2019',
            location: 'Remote',
            description:
                'Built responsive websites and web applications for international clients. Gained expertise in modern JavaScript frameworks and agile methodologies.',
            technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery']
        }
    ]
};

// education data
const education = {
    title: 'Education',
    items: [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'XYZ University',
            duration: '2006 - 2010',
            description:
                'Graduated with honors. Completed coursework in web development, database management, and software engineering.',
            achievements: ['Dean\'s List', 'GPA: 3.8/4.0']
        }
    ]
};

// skills data - organized by category
const skillsData = {
    categories: [
        {
            name: 'Frontend',
            skills: [
                { name: 'HTML5', icon: FaHtml5, level: 95 },
                { name: 'CSS3', icon: FaCss3, level: 90 },
                { name: 'JavaScript', icon: FaJs, level: 95 },
                { name: 'TypeScript', icon: SiTypescript, level: 85 },
                { name: 'React', icon: FaReact, level: 90 },
                { name: 'Next.js', icon: SiNextdotjs, level: 85 }
            ]
        },
        {
            name: 'Backend',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, level: 85 },
                { name: 'Laravel', icon: FaLaravel, level: 75 }
            ]
        },
        {
            name: 'Styling',
            skills: [
                { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
                { name: 'Shadcn UI', icon: SiShadcnui, level: 85 }
            ]
        },
        {
            name: 'Cloud & DevOps',
            skills: [
                { name: 'AWS', icon: FaAws, level: 75 },
                { name: 'DigitalOcean', icon: FaDigitalOcean, level: 80 },
                { name: 'Kubernetes', icon: SiKubernetes, level: 65 },
                { name: 'n8n', icon: SiN8N, level: 70 }
            ]
        },
        {
            name: 'Design & Tools',
            skills: [
                { name: 'Figma', icon: FaFigma, level: 80 },
                { name: 'MongoDB', icon: SiMongodb, level: 75 },
                { name: 'PostgreSQL', icon: SiPostgresql, level: 70 }
            ]
        }
    ]
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeIn' }
    }
};

// Timeline Item Component
const TimelineItem = ({ item, isExperience }) => {
    const technologies = isExperience ? item.technologies : item.achievements;
    return (
        <motion.div
            variants={itemVariants}
            className="relative pl-8 pb-10 last:pb-0">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 w-px h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />

            <div className="group">
                <span className="text-accent text-sm font-medium">{item.duration}</span>
                <h3 className="text-xl font-bold mt-1 group-hover:text-accent transition-colors">
                    {isExperience ? item.title : item.degree}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                    <p className="text-white/60">{isExperience ? item.company : item.institution}</p>
                    {item.location && (
                        <>
                            <span className="text-white/30">•</span>
                            <p className="text-white/40 text-sm">{item.location}</p>
                        </>
                    )}
                </div>
                <p className="text-white/80 mt-3 text-sm leading-relaxed">{item.description}</p>

                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// Skill Bar Component
const SkillBar = ({ skill, index }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-xl text-accent" />
                </div>
                <span className="font-medium">{skill.name}</span>
                <span className="ml-auto text-white/60 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full"
                />
            </div>
        </motion.div>
    );
};

const Resume = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="min-h-[80vh] py-12 xl:py-24">
            <div className="container mx-auto">
                <div className="px-4 pb-8 space-y-16">

                        {/* Hero Section */}
                        <motion.section
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center space-y-6">
                            <motion.h1
                                variants={itemVariants}
                                className="h1">
                                My <span className="text-accent">Resume</span>
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-white/60 max-w-2xl mx-auto text-lg">
                                {heroDescription}
                            </motion.p>
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center gap-4 flex-wrap">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-colors">
                                    <FaDownload /> Download CV
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent rounded-full hover:bg-accent/10 transition-colors">
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </motion.div>
                        </motion.section>

                        {/* Main Content Grid */}
                        <div className="grid xl:grid-cols-2 gap-12">

                            {/* Experience & Education Column */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12">

                                {/* Experience Section */}
                                <section>
                                    <motion.h2
                                        variants={itemVariants}
                                        className="text-xl font-semibold mb-6 flex items-center gap-2">
                                        <span className="w-6 h-0.5 bg-accent rounded-full" />
                                        Experience
                                    </motion.h2>
                                    <div className="space-y-2">
                                        {experience.items.map((item, index) => (
                                            <TimelineItem
                                                key={index}
                                                item={item}
                                                index={index}
                                                isExperience={true}
                                            />
                                        ))}
                                    </div>
                                </section>

                                {/* Education Section */}
                                <section>
                                    <motion.h2
                                        variants={itemVariants}
                                        className="text-xl font-semibold mb-6 flex items-center gap-2">
                                        <span className="w-6 h-0.5 bg-accent rounded-full" />
                                        Education
                                    </motion.h2>
                                    <div className="space-y-2">
                                        {education.items.map((item, index) => (
                                            <TimelineItem
                                                key={index}
                                                item={item}
                                                index={index}
                                                isExperience={false}
                                            />
                                        ))}
                                    </div>
                                </section>
                            </motion.div>

                            {/* Skills & About Column */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12">

                                {/* Skills Section */}
                                <section>
                                    <motion.h2
                                        variants={itemVariants}
                                        className="text-xl font-semibold mb-6 flex items-center gap-2">
                                        <span className="w-6 h-0.5 bg-accent rounded-full" />
                                        Skills
                                    </motion.h2>
                                    <div className="space-y-8">
                                        {skillsData.categories.map((category, catIndex) => (
                                            <motion.div
                                                key={catIndex}
                                                variants={itemVariants}
                                                className="space-y-4">
                                                <h3 className="text-sm uppercase tracking-wider text-white/50 font-medium">
                                                    {category.name}
                                                </h3>
                                                <div className="grid gap-4">
                                                    {category.skills.map((skill, skillIndex) => (
                                                        <SkillBar
                                                            key={skillIndex}
                                                            skill={skill}
                                                            index={skillIndex}
                                                        />
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>

                            </motion.div>
                        </div>

                        {/* Footer CTA */}
                        <motion.section
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center pt-8 border-t border-white/10">
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl font-semibold mb-4">
                                Interested in working together?
                            </motion.h3>
                            <motion.p
                                variants={itemVariants}
                                className="text-white/60 mb-6 max-w-md mx-auto">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </motion.p>
                            <motion.a
                                variants={itemVariants}
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-all hover:scale-105">
                                <FaGithub /> Get in Touch
                            </motion.a>
                        </motion.section>

                        </div>
            </div>
        </motion.div>
    );
};

export default Resume;