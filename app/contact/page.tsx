import Layout from "../components/Layout";
import SiteLink from "../components/SiteLink";

export default function Contact() {
    return (
        <Layout>
            <p>I'm available on <SiteLink href="https://www.linkedin.com/in/shreykumar" isExternal>LinkedIn</SiteLink> and ocassionally you'll see my side-projects appear on <SiteLink href="https://github.com/ShreyKumar" isExternal>Github</SiteLink>. Other than that, I am also available on email <SiteLink href="mailto:shreykumar961@gmail.com">shreykumar961@gmail.com</SiteLink> where you can request a resume</p>
        </Layout>
    );
}