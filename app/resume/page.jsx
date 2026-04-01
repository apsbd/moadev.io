'use client';

import {
    FaAws,
    FaLaravel,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaDownload,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiMongodb
} from 'react-icons/si';
import { motion } from 'framer-motion';

// hero description
const heroDescription =
    'Senior System Architect with 15+ years of experience building production-grade SaaS and AI platforms. Specialized in multi-tenant architecture, RAG systems, and scalable application design, with a strong track record of delivering real-world systems for production use.';

// contact info
const contactInfo = [
    { icon: FaEnvelope, label: 'devmoa@proton.me', href: 'mailto:devmoa@proton.me' },
    { icon: FaPhone, label: '+8801888568593', href: 'tel:+8801888568593' },
    { icon: FaMapMarkerAlt, label: 'Dhaka, Bangladesh', href: null },
    { icon: FaGithub, label: 'github.com/apsbd', href: 'https://github.com/apsbd' },
    { icon: FaLinkedin, label: 'linkedin.com/in/mohiuddin-ahmed-07', href: 'https://linkedin.com/in/mohiuddin-ahmed-07' }
];

// experience data
const experience = {
    title: 'Experience',
    items: [
        {
            title: 'Sr. System Architect',
            company: 'Tiered Communication Services, Inc',
            duration: '06/2020 – Present',
            location: 'Texas, USA',
            description: null,
            bullets: [
                'Built Utilen, a multi-tenant AI SaaS with RAG-based knowledge system and workspace-level data isolation, supporting multiple organizations and scalable knowledge retrieval',
                'Designed scalable architecture for large datasets and real-time query processing with optimized performance and low latency',
                'Developed a social media and video streaming platform supporting web and mobile users with Laravel backend, React frontend, and React Native apps',
                'Contributed to Heartland Cyber Range, a Kansas government project for cybersecurity training, simulating real-world systems and attack scenarios'
            ],
            technologies: ['Laravel', 'React', 'Qdrant', 'OpenAI', 'AWS S3', 'React Native']
        },
        {
            title: 'Adjunct Lecturer',
            company: 'Eastern University, Bangladesh',
            duration: '03/2025 – Present',
            location: 'Dhaka, Bangladesh',
            description: null,
            bullets: [
                'Teach software engineering with focus on real-world system design, scalable architecture, and AI-driven applications',
                'Mentor students in building production-level projects and applying academic concepts in practical environments'
            ],
            technologies: ['System Design', 'AI Applications', 'Software Engineering']
        },
        {
            title: 'Sr. Software Engineer & CTO',
            company: 'Of Eleven Media',
            duration: '02/2014 – 01/2020',
            location: 'USA',
            description: null,
            bullets: [
                'Developed and maintained DataMine SaaS platform used for data-driven workflows, ensuring system stability and continuous feature delivery',
                'Improved system reliability and performance by resolving critical issues and optimizing backend services'
            ],
            technologies: ['Laravel', 'MySQL', 'MongoDB', 'Node.js', 'Stripe']
        }
    ]
};

// education data
const education = {
    title: 'Education',
    items: [
        {
            degree: 'B.Sc. in Computer Science & Engineering',
            institution: 'Eastern University of Bangladesh',
            duration: '03/2010 – 11/2013',
            description: 'Studied core disciplines in computer science, software engineering, and systems design.',
            achievements: []
        }
    ]
};

// skills data
const skillsData = {
    categories: [
        {
            name: 'Architecture & Systems',
            skills: [
                { name: 'System Architecture', level: 97 },
                { name: 'Multi-Tenant SaaS', level: 95 },
                { name: 'AI / RAG Systems', level: 92 },
                { name: 'Distributed Systems', level: 90 }
            ]
        },
        {
            name: 'Backend & Frameworks',
            skills: [
                { name: 'Laravel', icon: FaLaravel, level: 95 },
                { name: 'Node.js', icon: FaNodeJs, level: 88 },
                { name: 'Next.js', icon: SiNextdotjs, level: 85 },
                { name: 'React', icon: FaReact, level: 88 }
            ]
        },
        {
            name: 'Data & Infrastructure',
            skills: [
                { name: 'PostgreSQL', icon: SiPostgresql, level: 88 },
                { name: 'Redis', icon: SiRedis, level: 85 },
                { name: 'MongoDB', icon: SiMongodb, level: 80 },
                { name: 'Docker', icon: FaDocker, level: 85 },
                { name: 'AWS', icon: FaAws, level: 82 }
            ]
        }
    ]
};

// languages
const languages = [
    { name: 'Bangla', level: 'Native', percent: 100 },
    { name: 'English', level: 'Professional Working', percent: 85 }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
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

                {item.description && (
                    <p className="text-white/80 mt-3 text-sm leading-relaxed">{item.description}</p>
                )}

                {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-2">
                        {item.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                                <span className="text-accent mt-1 shrink-0">▸</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}

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
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group">
            <div className="flex items-center gap-3 mb-2">
                {Icon ? (
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                        <Icon className="text-base text-accent" />
                    </div>
                ) : (
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                        <span className="text-accent text-xs font-bold">{skill.name.slice(0, 2).toUpperCase()}</span>
                    </div>
                )}
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="ml-auto text-white/50 text-xs">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.08 }}
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
                        className="space-y-6">
                        <div className="xl:flex xl:items-end xl:justify-between gap-8">
                            <div className="space-y-3">
                                <motion.p variants={itemVariants} className="text-accent text-sm font-medium uppercase tracking-widest">
                                    Resume
                                </motion.p>
                                <motion.h1 variants={itemVariants} className="h1">
                                    Mohiuddin <span className="text-accent">Ahmed</span>
                                </motion.h1>
                                <motion.p variants={itemVariants} className="text-white/50 text-lg font-medium">
                                    Senior System Architect · AI Product Builder · Full-Stack Engineer
                                </motion.p>
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-3 mt-6 xl:mt-0 xl:justify-end">
                                <a
                                    href="mailto:devmoa@proton.me"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-colors text-sm">
                                    <FaEnvelope /> Hire Me
                                </a>
                                <a
                                    href="https://linkedin.com/in/mohiuddin-ahmed-07"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent/50 text-accent rounded-full hover:bg-accent/10 transition-colors text-sm">
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </motion.div>
                        </div>

                        <motion.p
                            variants={itemVariants}
                            className="text-white/60 max-w-3xl text-base leading-relaxed border-l-2 border-accent/40 pl-4">
                            {heroDescription}
                        </motion.p>

                        {/* Contact chips */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            {contactInfo.map((item, i) => {
                                const Icon = item.icon;
                                const inner = (
                                    <span className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors">
                                        <Icon className="text-accent text-sm" />
                                        {item.label}
                                    </span>
                                );
                                return item.href ? (
                                    <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                                        {inner}
                                    </a>
                                ) : (
                                    <span key={i}>{inner}</span>
                                );
                            })}
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
                                    className="text-xl font-semibold mb-8 flex items-center gap-2">
                                    <span className="w-6 h-0.5 bg-accent rounded-full" />
                                    Work Experience
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
                                    className="text-xl font-semibold mb-8 flex items-center gap-2">
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

                            {/* Languages Section */}
                            <section>
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-xl font-semibold mb-8 flex items-center gap-2">
                                    <span className="w-6 h-0.5 bg-accent rounded-full" />
                                    Languages
                                </motion.h2>
                                <div className="space-y-5">
                                    {languages.map((lang, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            viewport={{ once: true }}>
                                            <div className="flex justify-between mb-1.5">
                                                <span className="font-medium text-sm">{lang.name}</span>
                                                <span className="text-white/50 text-xs">{lang.level}</span>
                                            </div>
                                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${lang.percent}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </motion.div>

                        {/* Skills Column */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-12">

                            <section>
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-xl font-semibold mb-8 flex items-center gap-2">
                                    <span className="w-6 h-0.5 bg-accent rounded-full" />
                                    Skills
                                </motion.h2>
                                <div className="space-y-10">
                                    {skillsData.categories.map((category, catIndex) => (
                                        <motion.div
                                            key={catIndex}
                                            variants={itemVariants}
                                            className="space-y-4">
                                            <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">
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
                            I'm open to discussing new projects, system architecture challenges, or AI product opportunities.
                        </motion.p>
                        <motion.a
                            variants={itemVariants}
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-all hover:scale-105">
                            <FaEnvelope /> Get in Touch
                        </motion.a>
                    </motion.section>

                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
