import Link from 'next/link';
import { ReactNode } from 'react';
import External from './External';

interface SiteLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    isExternal?: boolean;
    externalClassName?: string;
    isHidden?: boolean
}

export default function SiteLink({ href, children, className, isExternal = false, externalClassName, isHidden = false }: SiteLinkProps) {
    if (isHidden) {
        return <></>;
    }

    return (
        <Link href={href} className={`underline inline-block text-inherit ${className ?? ''}`} {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
            {children}
            {isExternal && <External className={`inline-block dark:filter-invert align-middle w-4 h-4 ml-1 ${externalClassName ?? ''}`} />}
        </Link>
    );
}