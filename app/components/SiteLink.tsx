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

    return (
        <Link href={href} className={`underline text-inherit ${className ?? ''}`} {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
            {children}
            {isExternal && <img alt='' src="external.svg" className='inline-block filter-invert align-middle w-4 h-4 ml-1' />}
        </Link>
    );
} //Test