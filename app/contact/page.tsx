import { Metadata } from "next";
import Layout from "../components/Layout";
import SiteLink from "../components/SiteLink";

export const metadata: Metadata = {
    title: "ShreyKumar.me | Contact",
    description: "Contact Shrey Kumar",
};

export default function Contact() {
    return (
        <Layout>
            <p>I'm available on <SiteLink href="https://www.linkedin.com/in/shreykumar" isExternal>LinkedIn</SiteLink>, and ocassionally you'll see my side-projects appear on <SiteLink href="https://github.com/ShreyKumar" isExternal>Github</SiteLink>. Other than that, you can also reach me by email <SiteLink href="mailto:shreykumar961@gmail.com">shreykumar961@gmail.com</SiteLink>, where you can <SiteLink href="mailto:shreykumar961@gmail.com?subject=Interested!&body=Hey Shrey, we're interested in learning more about you! Please send us a resume">request a resume</SiteLink>.</p>
        </Layout>
    );
}