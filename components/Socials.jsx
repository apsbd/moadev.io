import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/apsbd'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://linkedin.com/in/mohiuddin-ahmed-07'
    }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <a key={index} href={social.path} target='_blank' rel='noopener noreferrer' className={iconStyles}>
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default Socials;
