import Link from "next/link";
import External from "./External";

export default function ButtonLink({ isExternal, href, children }: { isExternal: boolean, href: string, children: React.ReactNode }) {
    return (
        <button className="flex group transition px-4 py-2 mt-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full border">
            <Link href={href} className="flex" {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
                {children}
                {isExternal && <External className="ml-2 mt-0.5 transition dark:filter-invert dark:group-hover:filter-none group-hover:filter-invert w-5 h-5" />}
            </Link>
        </button>
    )
}