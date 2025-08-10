"use client";

import { Container } from "@/components/Container";
import { PageSubtitle } from "@/components/PageSubtitle"
import { PageTitle } from "@/components/PageTitle"
import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import Link from "next/link";

export const projects = [
    {
        id: "showup1-web",
        title: "SHOWUP1 - Web",
        type: "web",
        client: "SHOWUP1",
        description: "ShowUp is a platform for creating and managing events.",
        image: "https://heroui.com/images/card-example-4.jpeg",
        tags: ["frontend", "backend", "software architecture", "web"],
        tech: ["Laravel 12", "Next.js", "Tailwind CSS", "MySQL", "Redis", "Docker", "AWS", "CI/CD", "Grafana", "Prometheus", "OpenTelemetry"],
    },
    {
        id: "showup1-mobile",
        title: "SHOWUP1 - Mobile",
        type: "mobile",
        client: "SHOWUP1",
        description: "ShowUp is a platform for creating and managing events.",
        image: "https://heroui.com/images/card-example-4.jpeg",
        tags: ["frontend", "backend", "software architecture", "mobile"],
        tech: ["React Native", "TypeScript", "Expo", "Firebase", "AWS", "CI/CD", "Grafana", "Prometheus", "OpenTelemetry"],
    },
    {
        id: "ai-integration",
        title: "AI Integration",
        type: "web",
        client: "Agency Analytics",
        description: "Agency Analytics is a platform for creating and managing events.",
        image: "https://heroui.com/images/card-example-4.jpeg",
        tags: ["frontend", "backend", "software architecture", "data analysis", "web"],
        tech: ["Laravel 12", "React", "MySQL", "Redis", "GCP", "Grafana", "Prometheus", "OpenTelemetry"],
    },
    {
        id: "database-optimization",
        title: "Database Optimization",
        type: "server",
        client: "Agency Analytics",
        description: "Agency Analytics is a platform for creating and managing events.",
        image: "https://heroui.com/images/card-example-4.jpeg",
        tags: ["frontend", "backend", "software architecture", "data analysis", "server"],
        tech: ["Laravel 12", "MySQL", "Redis", "GCP", "Grafana", "Prometheus", "OpenTelemetry"],
    },
]

export default function Work() {
  return (
    <Container>
      <PageTitle>Recent work</PageTitle>
        <PageSubtitle>Explore case studies of projects that showcase tech expertise and business impact</PageSubtitle>

        <div className="grid mt-13 grid-cols-2 gap-4">
            {projects.map((project) => (
                <Card as={Link} href={`/work/${project.id}`} key={project.id} className="rounded-lg h-[300px] overflow-hidden">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                        <p className="text-white/80 uppercase font-bold text-sm">{project.title}</p>
                        <div className="flex gap-2 mt-1">
                            {project.tags.map((tag) => (
                                <Chip key={tag} color="primary" size="sm">{tag}</Chip>
                            ))}
                        </div>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt={project.id}
                        className="z-0 w-full h-full object-cover rounded-lg"
                            src={project.image}
                        />
                </Card>
            ))}
        </div>
    </Container>
  );
}
