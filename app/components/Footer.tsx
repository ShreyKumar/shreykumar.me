import SiteLink from "./SiteLink";

export default function Footer() {
    return (
        <footer className="border-t mt-10 py-6 flex justify-center">
            <p>Built with the Next.js App Router</p>
            <SiteLink href="/blog" isHidden>Here's how</SiteLink>
        </footer>
    );
}