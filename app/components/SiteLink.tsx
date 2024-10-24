import Link from 'next/link';
import { ReactNode } from 'react';

interface SiteLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    isExternal?: boolean;
}

export default function SiteLink({ href, children, className, isExternal = false }: SiteLinkProps) {
    if (isExternal) {
        return (
            <a href={href} className={`hover:underline text-blue-800 ${className ?? ''}`} target="_blank" rel="noopener noreferrer">
                {children}
                <img src="external.svg" className='inline-block align-middle w-4 h-4 ml-1' />
            </a>
        );
    }

    return (
        <Link href={href} className={`hover:underline text-blue-800 ${className ?? ''}`}>
            {children}
        </Link>
    );
}