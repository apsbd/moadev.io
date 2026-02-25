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
    title: 'Mohiuddin Ahmed - Software Developer',
    description: 'I am a software developer with experience in building web applications using modern technologies. I am passionate about learning new technologies and improving my skills. I am always looking for new opportunities to grow and develop as a software developer.'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${jetbrains_Mono.variable} dark`}>
                <div className='font-primary'>
                <div className='opacity-25'>
                    <SplashCursor COLOR={{ r: 0, g: 0.87, b: 1.0 }} />
                </div>
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
