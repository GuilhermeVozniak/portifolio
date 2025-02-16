import { Person } from "@/mocks/profile";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  person: Person;
}

export function Contact({ person }: ContactProps) {
  return (
    <section className="w-full bg-muted/50">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tighter bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to connect with me on LinkedIn or reach out via email.
          </p>
          <div className="flex gap-6 justify-center">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a
                href={person.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a
                href="https://github.com/GuilhermeVozniak"
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a
                href="mailto:guilherme.vozniak.a@gmail.com"
                title="Send me an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a
                href="https://wa.me/5511987187444"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp (Brazil): +55 11 98718-7444"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a
                href="tel:+393349432089"
                title="Phone (Italy): +39 334 943 2089"
              >
                <Phone className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
