"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name : "home",
        path : "/"
    },
    {
        name : "services",
        path : "/services"
    },
    {
        name : "resume",
        path : "/resume"
    },
    ,
    {
        name : "work",
        path : "/work"
    },
    ,
    {
        name : "contact",
        path : "/contact"
    },

]

export const Nav = () => {
    return <nav className="flex gap-8">
        {links.map((link, index) => {
            const pathname = usePathname();
            const isActive = pathname === link.path;

            return (
                <Link key={index} href={link.path} className={`capitalize text-lg font-medium hover:text-accent transition-all duration-300 ${isActive && "text-accent border-b-2 border-accent"}`}>
                    {link.name}
                </Link>
            )
        })}
    </nav>;
};
