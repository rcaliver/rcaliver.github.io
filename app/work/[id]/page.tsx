"use client";

import { Container } from "@/components/Container";
import projects from "@/public/projects.json";
import { use } from "react";
import Image from "next/image";
import { Chip } from "@heroui/chip";

export default function Work({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <section className="relative w-full">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="font-sans font-bold text-white uppercase text-5xl md:text-7xl tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg mt-6 font-mono max-w-2xl text-white/85">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            <Container>
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