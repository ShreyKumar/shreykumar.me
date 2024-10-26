import Link from 'next/link';
import { ReactNode } from 'react';

interface SiteLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    isExternal?: boolean;
    isHidden?: boolean
}

export default function SiteLink({ href, children, className, isExternal = false, isHidden = false }: SiteLinkProps) {
    if (isHidden) {
        return <></>;
    }

    if (isExternal) {
        return (
            <a href={href} className={`hover:underline text-blue-800 ${className ?? ''}`} target="_blank" rel="noopener noreferrer">
                {children}
                <img alt='' src="external.svg" className='inline-block align-middle w-4 h-4 ml-1' />
            </a>
        );
    }

    return (
        <Link href={href} className={`hover:underline text-blue-800 ${className ?? ''}`}>
            {children}
        </Link>
    );
}