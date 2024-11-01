import Image from "next/image";
import SiteLink from "./SiteLink";

interface PanelProps {
    imageSrc: string;
    description: string;
    links: { label: string, link: string }[];
}

export default function Panel({ imageSrc, description, links }: Readonly<PanelProps>) {
    return (
        <div className="border border-gray-300 p-4 mb-5 rounded-lg flex items-center">
            <Image src={imageSrc} alt="" width={100} height={100} />
            <div className="flex flex-col ml-5 justify-between h-full">
                <p>{description}</p>
                <div className="">
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