export function PageTitle({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <h1 className="mt-13 font-sans text-center font-bold text-6xl/13 uppercase">{children}</h1>
  );
}
