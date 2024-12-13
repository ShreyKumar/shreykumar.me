import Link from "next/link";

export default function ButtonLink({ isExternal, href, children }: { isExternal: boolean, href: string, children: React.ReactNode }) {
    return (
        <button className="flex px-4 py-2 mt-4 rounded-full border">
            <Link href={href} className="flex" {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
                {children}
                {isExternal && <img src="external.svg" className="ml-4" style={{ filter: "invert(1)" }} alt="" width={20} height={20} />}
            </Link>
        </button>
    )
}