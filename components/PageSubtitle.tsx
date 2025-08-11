export function PageSubtitle({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-lg my-4 sm:my-13 font-mono text-center max-w-lg mx-auto">{children}</p>
    );
}