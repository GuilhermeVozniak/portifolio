export type Category =
  | "Frontend"
  | "DataBase"
  | "Backend"
  | "Infrastructure"
  | "Operational Systems"
  | "Blockchain"
  | "Protocols";

export interface Skill {
  name: string;
  icon: string;
  category: Category;
}

export const Skills: Skill[] = [
  {
    name: "React.js",
    icon: "react",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "nextdotjs",
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: "angular",
    category: "Frontend",
  },
  {
    name: "Vue.js",
    icon: "vuedotjs",
    category: "Frontend",
  },
  {
    name: "NodeJS",
    icon: "nodedotjs",
    category: "Backend",
  },
  {
    name: "Typescript",
    icon: "typescript",
    category: "Backend",
  },
  {
    name: "Golang",
    icon: "go",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "DataBase",
  },
  {
    name: "MySQL",
    icon: "mysql",
    category: "DataBase",
  },
  {
    name: "NoSQL",
    icon: "mongodb",
    category: "DataBase",
  },
  {
    name: "Redis",
    icon: "redis",
    category: "DataBase",
  },
  {
    name: "REST APIs",
    icon: "nodered",
    category: "Protocols",
  },
  {
    name: "HTTPS",
    icon: "letsencrypt",
    category: "Protocols",
  },
  {
    name: "SOAP",
    icon: "swagger",
    category: "Protocols",
  },
  {
    name: "AWS",
    icon: "amazon",
    category: "Infrastructure",
  },
  {
    name: "Google (GCP)",
    icon: "googlecloud",
    category: "Infrastructure",
  },
  {
    name: "Docker",
    icon: "docker",
    category: "Infrastructure",
  },
  {
    name: "Compose",
    icon: "docsdotrs",
    category: "Infrastructure",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    category: "Infrastructure",
  },
  {
    name: "Terraform",
    icon: "terraform",
    category: "Infrastructure",
  },
  {
    name: "Datadog",
    icon: "datadog",
    category: "Infrastructure",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    category: "Infrastructure",
  },
];
