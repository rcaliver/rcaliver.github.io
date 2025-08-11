"use client";

import { Container } from "@/components/Container";
import projects from "@/public/projects.json";
import { PageTitle } from "@/components/PageTitle";
import { PageSubtitle } from "@/components/PageSubtitle";
import { use } from "react";
import { Image } from "@heroui/image";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Chip } from "@heroui/chip";

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

                <div className="flex flex-row justify-center gap-4 my-13">
                    <p className="font-bold">{project.role} - {project.year}</p>
                </div>

                <div className="flex flex-row justify-center gap-4 my-13">
                    {project.tags.map(tag => (
                        <Chip key={tag} variant="flat" color="secondary">{tag}</Chip>
                    ))}
                </div>

                <div className="mb-4">
                    <p className="font-bold">Context</p>
                    <p className="font-medium text-white/80">{project.context}</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Challenge</p>
                    <p className="font-medium text-white/80">{project.challenge}</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Solution</p>
                <p className="font-medium text-white/80">{project.solution}</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Impact</p>
                    <ul className="list-disc list-inside text-white/80">
                        {project.impacts.map(impact => (
                            <li key={impact}>{impact}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Technical Details</p>
                    <ul className="list-disc list-inside text-white/80">
                        {project.tech.map(tech => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Screenshots</p>
                    <ul className="list-disc list-inside text-white/80">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}