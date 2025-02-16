import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Person } from "@/mocks/profile";

interface HeroProps {
  person: Person;
}

export function Hero({ person }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-32 flex flex-col items-center text-center gap-12">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
        <Image
          src={person.photoUrl}
          alt={`${person.firstName} ${person.lastName}`}
          width={160}
          height={160}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">
          Hi, I&apos;m <span className="text-primary">{person.firstName}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-[800px] leading-relaxed">
          {person.headline}
        </p>
      </div>
      <div className="flex gap-6">
        <Button size="lg" asChild>
          <a
            href={person.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
}
