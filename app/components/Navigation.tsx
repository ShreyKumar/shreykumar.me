"use client"

import { usePathname } from 'next/navigation';
import SiteLink from './SiteLink';
import { NAVIGATION_ROUTES as routes } from '../utils/constants';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className='hidden md:block'>
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
