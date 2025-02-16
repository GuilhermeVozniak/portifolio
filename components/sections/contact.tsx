import { Person } from "@/mocks/profile";
import { Button } from "@/components/ui/button";

interface ContactProps {
  person: Person;
}

export function Contact({ person }: ContactProps) {
  return (
    <section id="contact" className="container mx-auto px-4 py-24 bg-muted/50">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to connect with me on LinkedIn or reach out via email.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a
              href={person.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
