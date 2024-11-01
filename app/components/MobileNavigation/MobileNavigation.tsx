"use client"

import React, { useState } from 'react';
import HamburgerToggle from './HamburgerToggle';
import { NAVIGATION_ROUTES as routes } from '../../utils/constants';
import SiteLink from '../SiteLink';
import { usePathname } from 'next/navigation';


const MobileNavigation: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='block md:hidden'>
            <HamburgerToggle isActive={isActive} toggleMenu={toggleMenu} />
            {isActive && (
                <div className="fixed bg-white-transparent w-full h-full top-0">
                    <ul className="h-full flex flex-col mt-20 w-3/4 mx-auto">
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
                </div>
            )}
        </nav>
    );
};

export default MobileNavigation;
