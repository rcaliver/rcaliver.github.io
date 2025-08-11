"use client";

import { Container } from "@/components/Container";
import { PageSubtitle } from "@/components/PageSubtitle"
import { PageTitle } from "@/components/PageTitle"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import Link from "next/link";
import { Button } from "@heroui/react";
import projects from "@/public/projects.json";

export default function Work() {
  return (
    <Container>
        <PageTitle>Recent work</PageTitle>
        <PageSubtitle>Explore case studies of projects that showcase tech expertise and business impact</PageSubtitle>

        <div className="grid mt-13 grid-cols-3 gap-4">
            {projects.map((project) => (
                <Card
                    key={project.id}
                    className="rounded-lg overflow-hidden"
                    isBlurred
                >
                    <CardHeader className="flex-col h-[200px] overflow-hidden">
                        <Image
                            alt={project.title}
                            className="w-full h-full object-cover"
                            src={project.image}
                            width={300}
                            height={200}
                            removeWrapper
                        />
                    </CardHeader>
                    <CardBody>
                        <p className="text-white/80 uppercase font-bold text-sm">{project.title}</p>
                        <p className="text-white/50 mt-1 text-xs overflow-hidden h-8 line-clamp-2">{project.description}</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {project.tags.map((tag) => (
                                <Chip key={tag} variant="flat" color="secondary" size="sm">{tag}</Chip>
                            ))}
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button
                            as={Link}
                            href={`/work/${project.id}`}
                            variant="flat"
                            color="primary"
                            className="w-full"
                            isIconOnly
                            radius="full"
                            size="sm"
                        >
                            View details
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </Container>
  );
}
