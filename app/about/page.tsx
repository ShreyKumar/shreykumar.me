import Layout from "../components/Layout";
import SiteLink from "../components/SiteLink";

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

export default function About() {
    return (
        <Layout>
            <p className="mb-10">Hello world! I am Shrey, a Technical Lead, Senior Software Engineer with 5+ years of experience, Career Coach, Mentor and Dog Dad. I love to talk about technology, build cool things, lead teams and help make the world a better place.</p>
            <p className="mb-2">I am down to learn anything, but here are my top strengths:</p>
            <ul className="mb-6">
                {
                    technicalSkills.map(skill => (
                        <li key={skill} className="border border-purple-900 bg-purple-200 text-purple-700 px-5 py-1 mr-2 mb-2 text-center inline-block rounded">{skill}</li>
                    ))
                }
            </ul>

            <p>I've worked at numerous product companies and consultancies in the past very recently in e-commerce, and have been programming since I was 14 years old. In fact, my earliest internship was 10 years ago. <SiteLink href="https://www.linkedin.com/in/shreykumar/" isExternal>More on that here</SiteLink>.</p>
            <p>Here are a few of the places I've worked at:</p>
            <ul>
                <li>Orium</li>
                <li>Corra (Publics Sapient)</li>
                <li>urbancoolab</li>
                <li>Rush Hour Media</li>
                <li>Digital Butter</li>
                <li>RightBlue Labs</li>
            </ul>
        </Layout>
    );
}