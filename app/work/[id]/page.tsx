"use client";

import { Container } from "@/components/Container";
import projects from "@/public/projects.json";
import { PageTitle } from "@/components/PageTitle";
import { PageSubtitle } from "@/components/PageSubtitle";
import { use } from "react";
import { Image } from "@heroui/image";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function Work({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <Container>
                {/* <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full aspect-video object-cover"
                /> */}

                <PageTitle>{project.title}</PageTitle>
                <PageSubtitle>{project.description}</PageSubtitle>

                <Accordion defaultSelectedKeys={["1"]}>
                    <AccordionItem key="1" aria-label="Overview" title="Overview">
                        <p>{project.description}</p>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Technical Details" title="Technical Details">
                        <ul>
                            {project.tech.map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Features" title="Features">
                        <ul>
                            {project.tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Key Achievements" title="Key Achievements">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Screenshots" title="Screenshots">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                        </ul>
                    </AccordionItem>
                </Accordion>
            </Container>
        </div>
    )
}