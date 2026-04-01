import { JetBrains_Mono } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

// Components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import SplashCursor from '@/components/SplashCursor';

const jetbrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrains-mono'
});

export const metadata = {
    title: 'Mohiuddin Ahmed - Senior System Architect',
    description: 'I am a senior system architect with experience in designing and implementing scalable software solutions. I am passionate about system design and architecture, and I continuously strive to improve my skills in this field.'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${jetbrains_Mono.variable} dark`}>
                <div className='font-primary'>
                <SplashCursor COLOR={{ r: 0, g: 0.87, b: 1.0 }} />
                    <TooltipProvider>
                        <Header />
                        <StairTransition />
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </TooltipProvider>
                </div>
            </body>
        </html>
    );
}
