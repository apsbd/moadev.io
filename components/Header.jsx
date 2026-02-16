import Link from 'next/link';
import React from 'react';

// Components
import { Nav } from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

export default function Header() {
    return (
        <header className='py-8 xl:py-12 text-white px-4'>
            <div className='container mx-auto flex items-center justify-between'>
                {/* logo */}
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Ahmed<span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* desktop nav & hire me button  */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/contact'>
                        <Button variant="default">Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
