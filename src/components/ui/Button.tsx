import * as React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "group relative inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 p-[1px] active:scale-[0.98]",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <GlowingEffect
                        spread={15}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={1}
                    />
                </div>

                <span
                    className={cn(
                        "relative flex h-full w-full items-center justify-center gap-2 rounded-full border transition-colors",
                        // Variant Styles applied to inner span
                        variant === "primary" && "border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
                        variant === "secondary" && "border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
                        variant === "outline" && "border-neutral-300 bg-transparent text-neutral-950 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800",
                        variant === "ghost" && "border-transparent bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
                        // Size Styles
                        size === "sm" && "h-8 px-4 text-xs",
                        size === "md" && "h-10 px-6 text-sm",
                        size === "lg" && "h-12 px-8 text-base"
                    )}
                >
                    {children}
                </span>
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
