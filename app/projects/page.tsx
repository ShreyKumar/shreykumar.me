import Image from "next/image";
import Layout from "../components/Layout";
import ButtonLink from "../components/ButtonLink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ShreyKumar.me | Projects",
    description: "Shrey's projects",
    keywords: "Full-Stack Software Projects Showcase Javascript React Next.js TypeScript",
};

export default function Projects() {
    const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
        return (
            <h3 className="text-xl text-bold mb-3">{children}</h3>
        )
    }

    const ProjectBox = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className="mt-12 md:even:ml-10">
                {children}
            </div>
        )
    }

    const ProjectDescription = ({ children }: { children: React.ReactNode }) => {
        return (
            <p className="min-h-28">{children}</p>
        )
    }

    const ProjectSkills = ({ skills }: { skills: string[] }) => {
        return (
            <div className="flex flex-wrap mt-2">
                {skills.map((skill, index) => (
                    <span key={index} className="border border-moss-green bg-olivine text-moss-green px-5 py-1 mr-2 mb-2 text-center inline-block rounded">{skill}</span>
                ))}
            </div>
        )
    }

    return (
        <Layout>
            <p className="mb-12">I've worked on multiple codebases over the years and ocassionally work on a few side projects related to some of my interests.</p>
            <h2>Here are some examples:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <ProjectBox>
                    <Image src="/images/projects/hr.png" alt="Harry Rosen.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>HarryRosen.com</ProjectTitle>
                    <ProjectDescription>
                        A large scale Next.js site built with the pages router. It uses commercetools as the eCommerce platform and Ampliance as a content management system. This laid the foundation of Orium's current eCommerce accelerator. Uses an event-driven architecture with Kafka Message queues in the Backend to handle order transactions, product and inventory updates, etc. Collaborated with various cross-functional team members and stakeholders to build this. Won the MACH Alliance award for "Best Retail project". Led the development of the Wishlists functionality.
                    </ProjectDescription>
                    <ProjectSkills skills={["Next.js", "React", "Vercel", "TypeScript", "Ampliance", "commercetools", "Event Driven architectures"]} />
                    <ButtonLink href="https://www.harryrosen.com/" isExternal>Visit Site</ButtonLink>
                </ProjectBox>
                <ProjectBox>
                    <Image src={"/images/projects/superatv.png"} alt="SuperATV.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>SuperATV.com</ProjectTitle>
                    <ProjectDescription>
                        Led the development of a Next.js e-commerce site for a US based ATV retailer hosted on Vercel with Adobe Commerce as the backend e-commerce platform. Performed code reviews and provided technical direction for a large team of 10 developers. Also helped resolve security vulnerabilities and scaling issues.
                    </ProjectDescription>
                    <ProjectSkills skills={["Next.js", "React", "Vercel", "TypeScript", "GraphQL", "TailwindCSS", "Adobe Commerce"]} />
                    <ButtonLink href="https://www.superatv.com/" isExternal>Visit Site</ButtonLink>
                </ProjectBox>
                <ProjectBox>
                    <Image src={"/images/projects/spirent.png"} alt="Spirent.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>Spirent.com</ProjectTitle>
                    <ProjectDescription>
                        Worked in a cross-functional team of designers, product managers, and developers to build Spirent.com using Next.js, React, Netlify, Contentful, and TailwindCSS. Won a Web Excellence Award. Worked extensively with React components and helped speed up the delivery timeline significantly.
                    </ProjectDescription>
                    <ProjectSkills skills={["Next.js", "React", "Netlify", "TypeScript", "Contentful", "TailwindCSS"]} />
                    <ButtonLink href="https://www.spirent.com/" isExternal>Visit Site</ButtonLink>
                </ProjectBox>
                <ProjectBox>
                    <Image src={"/images/projects/ucl.png"} alt="Urbancoolab.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>Urbancoolab.com</ProjectTitle>
                    <ProjectDescription>
                        Built the early stages of the now fully responsive company website of Urbancoolab using React, SCSS, Contentful, and Next.js with PMs, designers, and developers in a cross-functional startup Agile environment.
                    </ProjectDescription>
                    <ProjectSkills skills={["Next.js", "React", "Vercel", "TypeScript", "Contentful"]} />
                    <ButtonLink href="https://urbancoolab.com/" isExternal>Visit Site</ButtonLink>
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>React Sleek Carousel</ProjectTitle>
                    <ProjectDescription>
                        Architected a React Carousel NPM package which reached over 100 weekly downloads. Produced a Demo website for the package using GitHub Pages and React. Implemented a clickable dot tracker to keep track of active slides using effective React State Management. Created panning (using the Framer Motion API), scrolling, and relay effects.
                    </ProjectDescription>
                    <ProjectSkills skills={["React", "TypeScript", "Framer Motion"]} />
                    <ButtonLink href="https://www.npmjs.com/package/sleek-react-carousel" isExternal>View source code</ButtonLink>
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>Collor (React HOC)</ProjectTitle>
                    <ProjectDescription>
                        A React High Order Component built from scratch that centralizes all loading and error States from API calls on React apps on data-dependent pages using Axios. This HOC is used to manage the state of the API calls and display loading and error states in a centralized manner.
                    </ProjectDescription>
                    <ProjectSkills skills={["React", "TypeScript"]} />
                    <ButtonLink href="https://github.com/ShreyKumar/collorjs" isExternal>View source code</ButtonLink>
                </ProjectBox>
            </div>
        </Layout>
    );
}