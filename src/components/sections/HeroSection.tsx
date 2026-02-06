import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export function HeroSection() {
    return (
        <section id="home">
            <HeroGeometric
                badge="Data & AI Engineer"
                title1="Mehraan Khan"
                title2="Data Intelligence"
            >
                <Link href="#projects">
                    <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white">
                        View Projects
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href="#contact">
                    <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm hover:bg-white/80">
                        Contact Me
                    </Button>
                </Link>
                <a href="/resume.pdf" download="Mehraan_Khan_Resume.pdf">
                    <Button variant="ghost" size="lg">
                        <Download className="h-4 w-4" />
                        Resume
                    </Button>
                </a>
            </HeroGeometric>
        </section>
    );
}
