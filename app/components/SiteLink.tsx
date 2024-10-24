import Link from 'next/link';
import { ReactNode } from 'react';

interface SiteLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function SiteLink({ href, children, className }: SiteLinkProps) {
    return (
        <Link href={href} className={`hover:underline text-blue-800 ${className ?? ''}`}>
            {children}
        </Link>
    );
}