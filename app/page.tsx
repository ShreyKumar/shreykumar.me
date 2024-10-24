import Layout from "./components/Layout";
import SiteLink from "./components/SiteLink";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl mb-5">Hi I'm Shrey! 👋</h1>
      <p className="mb-12">Welcome to my site! Feel free to get in touch with me <SiteLink href='/contact'>here</SiteLink> if you have any feedback on anything😃</p>
      <Image src="/images/dp.JPG" alt="Shrey" width={400} height={400} className="rounded" />
    </Layout>
  );
}
