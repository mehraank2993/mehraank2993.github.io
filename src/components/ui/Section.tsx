import * as React from "react";
import { cn } from "@/lib/utils";

const Section = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300", className)}
        {...props}
    />
));
Section.displayName = "Section";

export { Section };
