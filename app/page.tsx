import { Metadata } from "next";
import Layout from "./components/Layout";
import SiteLink from "./components/SiteLink";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "ShreyKumar.me | Senior Software Engineer, Technical Lead, Career Coach, Mentor",
    description: "Shreyansh Kumar's personal website. Shrey is a Technical Lead, Senior Software Engineer, Career Coach and Mentor with 5+ years of industry experience.",
    keywords: "Software Engineer Portfolio",
};

export default function Home() {
    return (
        <Layout>
            <h1 className="text-3xl mb-5">Hi, I'm Shrey! 👋</h1>
            <p className="mb-12">Welcome to my site! Feel free to get in touch with me <SiteLink href='/contact'>here</SiteLink>. 😃</p>
            <Image src="/images/dp.jpg" alt="Shrey" width={400} height={400} className="rounded" />
        </Layout>
    );
}
