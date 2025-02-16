import { Person, PositionHistory } from "@/mocks/profile";
import Image from "next/image";

interface ExperienceProps {
  person: Person;
}

export function Experience({ person }: ExperienceProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-8 text-center tracking-tighter bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
        Work Experience
      </h2>
      <p className="text-xl text-muted-foreground mb-12 text-center">
        Discover my professional journey and the companies I&apos;ve worked with
      </p>
      <div className="grid grid-cols-1 gap-12 max-w-[800px] mx-auto">
        {Object.entries(
          person.positions.positionHistory.reduce<
            Record<
              string,
              {
                positions: PositionHistory[];
                logo: string;
                location: string;
                linkedInUrl: string;
              }
            >
          >((companies, position) => {
            const company = companies[position.companyName] || {
              positions: [],
              logo: position.companyLogo,
              location: position.companyLocation,
              linkedInUrl: position.linkedInUrl,
            };
            company.positions.push(position);
            companies[position.companyName] = company;
            return companies;
          }, {})
        ).map(([companyName, company], index) => (
          <div
            key={index}
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={companyName}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <a
                  href={company.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block hover:text-primary transition-all duration-200 hover:-translate-y-0.5 decoration-primary hover:underline underline-offset-4"
                >
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {companyName}
                  </h3>
                </a>
                <p className="text-sm text-muted-foreground">
                  {company.location}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {company.positions.map((position, posIndex) => (
                <div key={posIndex} className="border-l-2 border-muted pl-4">
                  <h4 className="text-lg font-medium tracking-tight">
                    {position.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {position.startEndDate.start.month}/
                    {position.startEndDate.start.year}
                    {position.startEndDate.end
                      ? ` - ${position.startEndDate.end.month}/${position.startEndDate.end.year}`
                      : " - Present"}
                  </p>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
