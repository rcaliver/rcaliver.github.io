const variants = {
    lg: "max-w-4xl",
    md: "max-w-md",
    sm: "max-w-sm",
    xs: "max-w-xs",
}

export function Container({ children, size = "lg", margin, ...props }: { children: React.ReactNode, size?: keyof typeof variants, margin?: { top?: string, bottom?: string } } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${variants[size]} mx-auto ${margin?.top} ${margin?.bottom}`} {...props}>
            {children}
        </div>
    );
}
