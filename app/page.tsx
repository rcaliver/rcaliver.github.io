import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { PageSubtitle } from "@/components/PageSubtitle";
import { Container } from "@/components/Container";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <Container margin={{ top: "sm:mt-36" }}>
      <PageTitle>Hey, I&apos;m Rodrigo Silva but you can call me <span className="text-primary">Caliver</span>!</PageTitle>
      <PageSubtitle>I&apos;m a full stack developer with 12+ years of experience and an aspiring software architect</PageSubtitle>

      <Container size="md" margin={{ top: "sm:mt-13", bottom: "sm:mb-13" }}>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-center">
          <div className="flex items-center gap-2">
            <Button
              as={Link}
              href="/work"
              variant="ghost"
              color="primary"
              size="lg"
              className="text-lg font-mono uppercase"
            >
              See my work
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              as={Link}
              href="/contact"
              variant="ghost"
              color="primary"
              size="lg"
              className="text-lg font-mono uppercase"
            >
              Contact me
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}
