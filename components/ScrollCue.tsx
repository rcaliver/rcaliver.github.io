export function ScrollCue({ anchorId }: { anchorId: string }) {
  return (
    <a
      href={`#${anchorId}`}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center text-white/70 hover:text-white"
      aria-label="Scroll to explore"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs mt-1">scroll</span>
    </a>
  );
}

export default ScrollCue;


