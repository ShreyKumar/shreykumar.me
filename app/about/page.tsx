import Image from "next/image";
import Layout from "../components/Layout";
import SiteLink from "../components/SiteLink";
import { getDifferenceInYears } from "../utils";
import { Metadata } from "next";

const technicalSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "commercetools",
    "E-Commerce",
    "Composable Commerce",
    "Event Driven architectures"
]

const companies = [
    { label: "Orium", link: "https://orium.com/" },
    { label: "Corra", link: "https://corra.com/" },
    { label: "Urbancoolab", link: "https://urbancoolab.com/" },
    { label: "Rush Hour Media", link: "https://rushhourdigital.com/" },
    { label: "Digital Butter", link: "https://www.butter.com.hk/" },
    { label: "RightBlue Labs", link: "https://www.rightbluelabs.co/" },
    { label: "Xesto", link: "https://xesto.io/" },
    { label: "MagicFlow", link: "https://magiclive.co.za/" }
]

export const metadata: Metadata = {
    title: "ShreyKumar.me | About",
    description: "About Shrey Kumar",
};

export default function About() {
    return (
        <Layout>
            <p className="mb-10">Hello, world! I am Shrey, a Technical Lead, Senior Software Engineer with 5+ years of experience, Career Coach, Mentor and Dog Dad. I love to talk about technology, build cool things, lead teams and help make the world a better place. I'm often considered to be a Subject Matter Expert in Next.js and known to be able to come up with </p>
            <Image src={"/images/main.jpg"} alt="Shrey" width={150} height={150} className="rounded-full mb-8 mx-auto md:mx-0 " />
            <p className="mb-2">I am down to learn anything, but here are my top strengths:</p>
            <ul className="mb-6">
                {
                    technicalSkills.map(skill => (
                        <li key={skill} className="border border-purple-900 bg-purple-200 text-purple-700 px-5 py-1 mr-2 mb-2 text-center inline-block rounded">{skill}</li>
                    ))
                }
            </ul>

            <p>I've worked at numerous companies most recently in e-commerce, and have been programming since I was 14 years old. In fact, my earliest internship was more than {`${getDifferenceInYears(new Date('2013-08'), new Date())}`} years ago. <SiteLink href="https://www.linkedin.com/in/shreykumar/details/experience/" isExternal>More on that here</SiteLink>.</p>
            <p className="mb-2">Here are a few of the places I've worked at:</p>
            <ul className="mb-6">
                {
                    companies.map(company => (
                        <li key={company.label} className="inline-block">
                            <SiteLink
                                className="border border-purple-900 bg-blue-200 text-blue-700 px-5 py-1 mr-2 mb-2 text-center inline-block rounded hover:no-underline"
                                href={company.link}
                                isExternal
                            >
                                {company.label}
                            </SiteLink>
                        </li>
                    ))
                }
            </ul>
            <p className="mb-4">That's it for now! Feel free to get in touch with me <SiteLink href="/contact">here</SiteLink> otherwise here's a picture of my dog Copper.</p>
            <Image src={"/images/copper.jpg"} alt="Copper" width={300} height={400} className="rounded mb-8" />

        </Layout>
    );
}