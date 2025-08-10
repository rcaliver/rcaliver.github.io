import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-36">
      <h1 className="text-4xl font-sans text-center font-bold text-6xl/13 uppercase">
        Hey, I&apos;m Rodrigo Silva but you can call me <span className="text-red-500">Caliver</span>!
      </h1>
      <div className="max-w-md mx-auto">
        <p className="mt-13 text-lg text-center font-mono">I&apos;m a full stack developer with 12+ years of experience and an aspiring software architect</p>
        <div className="mt-13 flex justify-between gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="text-lg font-mono">→</span>
            <Link href="/projects" className="text-lg font-mono">see my projects</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-mono">→</span>
            <Link href="/contact" className="text-lg font-mono">contact me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
