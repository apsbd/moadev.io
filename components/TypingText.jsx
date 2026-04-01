'use client';
import { useEffect, useState } from 'react';

const titles = ['Senior System Architect', 'AI Product Builder', 'Full-Stack Engineer'];

export default function TypingText() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = titles[index];
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(current.substring(0, text.length + 1));
                if (text === current) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setText(current.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <span className='text-xl font-medium'>
            {text}
            <span className='text-accent animate-pulse'>|</span>
        </span>
    );
}
