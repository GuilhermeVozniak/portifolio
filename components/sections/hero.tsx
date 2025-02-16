import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Person } from "@/mocks/profile";

interface HeroProps {
  person: Person;
}

export function Hero({ person }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center gap-8">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src={person.photoUrl}
          alt={`${person.firstName} ${person.lastName}`}
          width={128}
          height={128}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Hi, I&apos;m <span className="text-primary">{person.firstName}</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-[800px]">
        {person.headline}
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <a
            href={person.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
}
