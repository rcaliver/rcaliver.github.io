"use client";

import { Container } from "@/components/Container";
import projects from "@/public/projects.json";
import { use } from "react";
import { Chip } from "@heroui/chip";
import Hero from "@/components/Hero";

export default function Work({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <Hero
                src={project.image}
                alt={(project as any).imageAlt ?? project.title}
                title={project.title}
                subtitle={project.description}
                highlightWord={(project as any).hero?.highlightWord}
                overlayStrength={(project as any).hero?.overlayStrength ?? "medium"}
                primaryCta={{ href: "/contact", label: "Get in touch" }}
                secondaryCta={{ href: "/work", label: "View all work" }}
                scrollToId="case-content"
            />

            <Container id="case-content">
                <div className="flex flex-wrap justify-center gap-4 my-13">
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