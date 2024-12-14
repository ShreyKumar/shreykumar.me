import Link from "next/link";

export default function ButtonLink({ isExternal, href, children }: { isExternal: boolean, href: string, children: React.ReactNode }) {
    return (
        <button className="flex group transition px-4 py-2 mt-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full border">
            <Link href={href} className="flex" {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
                {children}
                {isExternal && <img src="external.svg" className="ml-4 transition dark:filter-invert dark:group-hover:filter-none group-hover:filter-invert" alt="" width={20} height={20} />}
            </Link>
        </button>
    )
}