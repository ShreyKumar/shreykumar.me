import Image from "next/image";
import Layout from "../components/Layout";
import ButtonLink from "../components/ButtonLink";

export default function Projects() {
    const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
        return (
            <h3 className="text-xl text-bold mb-3">{children}</h3>
        )
    }

    const ProjectBox = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className="mt-8 even:ml-10">
                {children}
            </div>
        )
    }

    return (
        <Layout>
            <p className="mb-12">I've worked on multiple codebases over the years and ocassionally work on a few side projects related to some of my interests</p>
            <h2>Here are some examples:</h2>
            <div className="grid grid-cols-2">
                <ProjectBox>
                    <Image src="/images/projects/hr.png" alt="Harry Rosen.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>HarryRosen.com</ProjectTitle>
                    <p>A large scale Next.js site built with the pages router. It uses commercetools as the eCommerce platform and Ampliance as a content management system. This laid the foundation of Orium's current eCommerce accelerator. Uses an event-driven architecture with Kafka Message queues in the Backend to handle order transactions, product and inventory updates, etc. Collaborated with various cross-functional team members and stakeholders to build this. Won the MACH Alliance award for "Best Retail project". Led the development of the Wishlists functionality.</p>
                    <ButtonLink href="https://www.harryrosen.com/" isExternal>Visit Site</ButtonLink>
                </ProjectBox>
                <ProjectBox>
                    <Image src={"/images/projects/superatv.png"} alt="SuperATV.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>SuperATV.com</ProjectTitle>
                    <p>Led the development of a Next.js site hosted on Vercel with commercetools and an eCommerce back end. Performed code reviews and provided technical direction for a large team of 10 developers. Also helped resolve security vulnerabilities and scaling issues.</p>
                </ProjectBox>
                <ProjectBox>
                    <Image src={"/images/projects/spirent.png"} alt="Spirent.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>Spirent.com</ProjectTitle>
                    <p>Worked in a cross-functional team of designers, product managers, and developers to build Spirent.com using Next.js, React, Netlify, Contentful, and TailwindCSS. Won a Web Excellence Award. Worked extensively with React components and helped speed up the delivery timeline significantly.</p>
                </ProjectBox>
                <ProjectBox>
                    <Image src={"/images/projects/ucl.png"} alt="Urbancoolab.com" width={700} height={500} />
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>Urbancoolab.com</ProjectTitle>
                    <p>Built the early stages of the now fully responsive company website of Urbancoolab using React, SCSS, Contentful, and Next.js with PMs, designers, and developers in a cross-functional startup Agile environment.</p>
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>React Sleek Carousel</ProjectTitle>
                    <p>Architected a React Carousel NPM package which reached over 100 weekly downloads. Produced a Demo website for the package using GitHub Pages and React. Implemented a clickable dot tracker to keep track of active slides using effective React State Management. Created panning (using the Framer Motion API), scrolling, and relay effects.</p>
                </ProjectBox>
                <ProjectBox>
                    <ProjectTitle>Collor (React HOC)</ProjectTitle>
                    <p>A React High Order Component built from scratch that centralizes all loading and error States from API calls on React apps on data-dependent pages using Axios. Built while early in my career while working as a developer at urbancoolab.</p>
                </ProjectBox>
            </div>
        </Layout>
    );
}