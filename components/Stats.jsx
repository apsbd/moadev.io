'use client';

import CountUp from "react-countup";
import { div } from "three/src/nodes/math/OperatorNode";

const stats = [
    {
        num: 15,
        plus: true,
        text: 'Years of Experience'
    },
    {
        num: 50,
        plus: true,
        text: 'Projects Completed'
    },
    {
        num: 8,
        plus: true,
        text: 'Technologies Mastered'
    },
    {
        num: 500,
        plus: true,
        text: 'Code Commits'
    }
];

const Stats = () => {
    return (
        <section className='stats pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className='container mx-auto'>
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => (
                        <div key={index} className='flex flex-1 gap-4 items-center justify-center xl:justify-start'>
                        <CountUp
                            end={parseInt(stat.num)}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold"
                        />
                        {stat.plus && <span className="text-4xl xl:text-6xl font-extrabold">+</span>}
                        <p className={`${stat.text.length > 10 ? 'max-w-25' : 'max-w-37.5'} leading-snug text-white/80`}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
