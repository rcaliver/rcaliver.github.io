import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { PageSubtitle } from "@/components/PageSubtitle";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container margin={{ top: "mt-36" }}>
      <PageTitle>Hey, I&apos;m Rodrigo Silva but you can call me <span className="text-red-500">Caliver</span>!</PageTitle>
      <PageSubtitle>I&apos;m a full stack developer with 12+ years of experience and an aspiring software architect</PageSubtitle>

      <Container size="md" margin={{ top: "mt-13", bottom: "mb-13" }}>
        <div className="flex justify-between gap-4 text-center">
          <div className="flex items-center gap-2">
          <Link href="/work" className="text-lg font-mono">
            <span className="text-lg font-mono">→</span> see my work
          </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="text-lg font-mono">
              <span className="text-lg font-mono">→</span> contact me
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
}
