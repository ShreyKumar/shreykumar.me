import { Metadata } from "next";
import Layout from "../components/Layout";
import Panel from "../components/Panel";

const coachingPlaces = [
    {
        imageSrc: "/images/cf_logo.jpg",
        altText: "CareerFoundry logo",
        description: "As a Mentor on CareerFoundry, I am providing actionable guidance to career switchers of various backgrounds looking to transition into tech. I help them with their job search, portfolio and more. I've seen clients go from stocking shelves at grocery stores to landing 6 figure Software Engineer jobs.",
        links: [
            { label: "CareerFoundry.com", link: "https://www.careerfoundry.com/" }
        ]
    },
    {
        imageSrc: "/images/wizco_logo.png",
        altText: "Wizco logo",
        description: "Wizco is the premium online interview prep tool that helps candidates land their dream roles. Being part of the expert community, I've delivered over 30 mock interviews for candidates looking to get into top tech companies. Awarded the '2023 Top Performer' for truly excelling at my craft, I've helped Wizco land high value agreements like CareerBuilder, Toronto Metropolitan University and more.",
        links: [
            { label: "Wizco.io", link: "https://www.wizco.io/" }
        ]
    },
    {
        imageSrc: "/images/youthfully_logo.png",
        altText: "Youthfully logo",
        description: "As a Youth Coach on Youthfully, I help young adults navigate their career paths, university applications and more. I've helped students get into top Canadian and American universities like Tufts, UMichigan, UofT, UWaterloo and more.",
        links: [
            { label: "Youthfully.com", link: "https://www.youthfully.com/" },
            { label: "My Coach profile", link: "https://www.youthfully.com/coach/shrey-kumar" },
            { label: "Youth Coach™ Certification", link: "https://drive.google.com/file/d/1_ipPFxfTQwEovyomF7sl4eyfWS6IN_S6/view" }
        ]
    }
]

export const metadata: Metadata = {
    title: "ShreyKumar.me | Coaching",
    description: "Shrey's coaching services",
};

export default function Coaching() {
    return (
        <Layout>
            <p className="mb-12">I've helped over 100 people land their dream jobs, get into their top universities and more. I'm skilled at building client relationships, upskilling others and helping them reach their true potential. My coach rating has consistently been very high on multiple platforms.</p>
            <h2 className="mb-8">Here are some of the places I coach:</h2>
            {
                coachingPlaces.map(place => (
                    <Panel key={place.imageSrc} imageSrc={place.imageSrc} description={place.description} links={place.links} />
                ))
            }
        </Layout>
    );
}