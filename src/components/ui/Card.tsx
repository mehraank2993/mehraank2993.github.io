import * as React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative rounded-[1.25rem] border border-neutral-800 bg-transparent p-1 shadow-sm",
            className
        )}
        {...props}
    >
        <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
        />
        <div className="relative h-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            {children}
        </div>
    </div>
));
Card.displayName = "Card";

export { Card };
