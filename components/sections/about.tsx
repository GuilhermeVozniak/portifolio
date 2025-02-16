import { Person } from "@/mocks/profile";
import { Map } from "@/components/ui/map";

interface AboutProps {
  person: Person;
}

export function About({ person }: AboutProps) {
  return (
    <section className="container mx-auto px-4 py-24 bg-muted/50">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl font-bold mb-8 tracking-tighter bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground mb-6 whitespace-pre-line leading-relaxed">
          {person.summary}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">
              Current Position
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                {person.positions.positionHistory[0].title}
              </p>
              <p className="text-muted-foreground">
                {person.positions.positionHistory[0].companyName}
              </p>
              <p className="text-sm text-muted-foreground">
                {person.positions.positionHistory[0].companyLocation}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">Location</h3>
            <p className="text-lg text-muted-foreground">{person.location}</p>
            <Map location={person.location} />
          </div>
        </div>
      </div>
    </section>
  );
}
