import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import profile from "@/mocks/profile";

export default function Home() {
  const { person } = profile;

  return (
    <div className="min-h-screen bg-background">
      <Hero person={person} />
      <About person={person} />
      <Skills />
      <Experience person={person} />
      <Contact person={person} />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {person.firstName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
