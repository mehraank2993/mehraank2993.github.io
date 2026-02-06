import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Download } from "lucide-react";

export default function ResumePage() {
    return (
        <Section className="bg-white">
            <Container className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">Resume</h1>
                    <a href="/resume.pdf" download="Mehraan_Khan_Resume.pdf">
                        <Button className="gap-2">
                            <Download className="h-4 w-4" />
                            Download PDF
                        </Button>
                    </a>
                </div>

                <div className="relative aspect-[1/1.414] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm md:h-[calc(100vh-250px)] md:aspect-auto">
                    <iframe
                        src="/resume.pdf"
                        className="h-full w-full"
                        title="Resume PDF"
                    />
                </div>
            </Container>
        </Section>
    );
}
