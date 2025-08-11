import Image from "next/image";
import Link from "next/link";

type Cta = {
  href: string;
  label: string;
};

type OverlayStrength = "soft" | "medium" | "strong";

export type HeroProps = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  highlightWord?: string;
  overlayStrength?: OverlayStrength;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  scrollToId?: string;
};

const overlayByStrength: Record<OverlayStrength, string> = {
  soft: "from-black/10 via-black/30 to-black/50",
  medium: "from-black/20 via-black/45 to-black/70",
  strong: "from-black/30 via-black/60 to-black/80",
};

function getHighlightedTitle(title: string, highlightWord?: string): React.ReactNode {
  if (!highlightWord) {
    return title;
  }
  const idx = title.toLowerCase().indexOf(highlightWord.toLowerCase());
  if (idx === -1) return title;
  const before = title.slice(0, idx);
  const match = title.slice(idx, idx + highlightWord.length);
  const after = title.slice(idx + highlightWord.length);
  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-white to-[var(--color-primary)] bg-clip-text text-transparent">
        {match}
      </span>
      {after}
    </>
  );
}

export function Hero({
  src,
  alt,
  title,
  subtitle,
  highlightWord,
  overlayStrength = "medium",
  primaryCta,
  secondaryCta,
  scrollToId,
}: HeroProps) {
  return (
    <section className="relative w-full">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />

        {/* overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${overlayByStrength[overlayStrength]}`}
          aria-hidden
        />

        {/* decorative shapes (simple, CSS-only) */}
        <div className="pointer-events-none" aria-hidden>
          <div className="absolute -top-10 right-10 w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
          <div className="absolute bottom-10 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        </div>

        {/* content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-sans font-bold text-white uppercase text-5xl md:text-7xl tracking-tight">
            {getHighlightedTitle(title, highlightWord)}
          </h1>
          {subtitle ? (
            <p className="text-lg mt-6 font-mono max-w-2xl text-white/85">{subtitle}</p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex gap-4 flex-wrap items-center justify-center">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="px-5 py-3 rounded-full bg-[var(--color-primary)] text-black font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
                  aria-label={primaryCta.label}
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="px-5 py-3 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
                  aria-label={secondaryCta.label}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}

          {scrollToId ? (
            <a
              href={`#${scrollToId}`}
              className="absolute bottom-6 inline-flex flex-col items-center text-white/70 hover:text-white"
              aria-label="Scroll to explore"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs mt-1">scroll</span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Hero;


