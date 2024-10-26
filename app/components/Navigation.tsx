"use client"

import { usePathname } from 'next/navigation';
import SiteLink from './SiteLink';

const routes = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/coaching', label: 'coaching' },
    { path: '/projects', label: 'projects' },
    { path: '/blog', label: 'blog', isHidden: true },
    { path: '/contact', label: 'contact' },
]

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className='flex justify-between mb-14'>
                {
                    routes.map(route => (
                        route.isHidden ? null :
                            <li key={route.path}>
                                <SiteLink href={route.path} className={`text-xl !text-black ${pathname === route.path ? 'font-bold' : ''}`}>
                                    {route.label}
                                </SiteLink>
                            </li>
                    ))
                }
            </ul>
        </nav>
    );
}
