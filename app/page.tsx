import { Button } from "@/components/ui/button";
import Image from "next/image";
import profile, { PositionHistory } from "@/mocks/profile";
import { Map } from "@/components/ui/map";

export default function Home() {
  const { person } = profile;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* About Section */}
      <section className="container mx-auto px-4 py-24 bg-muted/50">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-muted-foreground mb-6 whitespace-pre-line">
            {person.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Current Position</h3>
              <div className="space-y-2">
                <p className="font-medium">
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
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-muted-foreground">{person.location}</p>
              <Map location={person.location} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>
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
                  <h3 className="text-2xl font-semibold">{companyName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {company.location}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {company.positions.map((position, posIndex) => (
                  <div key={posIndex} className="border-l-2 border-muted pl-4">
                    <h4 className="text-lg font-medium">{position.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {position.startEndDate.start.month}/
                      {position.startEndDate.start.year}
                      {position.startEndDate.end
                        ? ` - ${position.startEndDate.end.month}/${position.startEndDate.end.year}`
                        : " - Present"}
                    </p>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {position.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={company.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Company
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-24 bg-muted/50"
      >
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

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {person.firstName} {person.lastName}. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
