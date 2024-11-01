import Image from "next/image";
import SiteLink from "./SiteLink";

interface PanelProps {
    imageSrc: string;
    description: string;
    links: { label: string, link: string }[];
}

export default function Panel({ imageSrc, description, links }: Readonly<PanelProps>) {
    return (
        <div className="border border-gray-300 p-4 mb-5 rounded-lg flex flex-col md:flex-row items-center min-h-52">
            <Image src={imageSrc} alt="" width={250} height={100} />
            <div className="flex flex-col mt-6 md:mt-0 ml-0 md:ml-10 justify-between">
                <p>{description}</p>
                <div className="mt-5 flex flex-col lg:flex-row">
                    {
                        links.map(link => (
                            <SiteLink key={link.link} href={link.link} className="text-blue-800 hover:underline mr-2" isExternal>{link.label}</SiteLink>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}