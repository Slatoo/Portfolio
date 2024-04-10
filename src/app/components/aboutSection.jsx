"use client";
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './tabButton';

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const TabData = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className='list-disc pl-2'>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                </ul>
            ),
        },
        {
            title: "Certification",
            id: "certification",
            content: (
                <ul className='list-disc pl-2'>
                    <li>English P2.js</li>
                </ul>
            ),
        },
        {
            title: "Experiece",
            id: "experience",
            content: (
                <ul className='list-disc pl-2'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            ),
        }
    ]

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/pc1.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at provident, excepturi id tempore dolorum deserunt voluptatibus non laboriosam labore quos mollitia animi quidem exercitationem ea iste, ipsa eveniet molestiae!</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                    </div>
                    <div className='mt-8'>
                        {TabData.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection