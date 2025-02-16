import { Skills as SkillsList } from "@/mocks/skills";
import Image from "next/image";

export function Skills() {
  const groupedSkills = SkillsList.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof SkillsList>);

  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-16 text-center tracking-tighter bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-[1200px] mx-auto">
        {Object.entries(groupedSkills).map(
          ([category, skills], categoryIndex, categories) => (
            <div
              key={category}
              className={`space-y-8 ${
                categoryIndex === categories.length - 1 ? "col-span-full" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-center tracking-tight text-foreground/90">
                {category}
              </h3>
              <div
                className={`grid ${
                  categoryIndex === categories.length - 1
                    ? "grid-cols-4 sm:grid-cols-8"
                    : "grid-cols-2"
                } gap-6`}
              >
                {skills.map((skill, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="group relative flex flex-col items-center justify-center p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all duration-300 gap-3"
                  >
                    <Image
                      src={`https://cdn.simpleicons.org/${skill.icon}/666666`}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 dark:invert group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
