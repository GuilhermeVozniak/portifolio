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
  doc: string;
}

export const Skills: Skill[] = [
  {
    name: "React.js",
    icon: "react",
    category: "Frontend",
    doc: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: "nextdotjs",
    category: "Frontend",
    doc: "https://nextjs.org/docs",
  },
  {
    name: "Angular",
    icon: "angular",
    category: "Frontend",
    doc: "https://angular.io/docs",
  },
  {
    name: "Vue.js",
    icon: "vuedotjs",
    category: "Frontend",
    doc: "https://vuejs.org",
  },
  {
    name: "NodeJS",
    icon: "nodedotjs",
    category: "Backend",
    doc: "https://nodejs.org/docs",
  },
  {
    name: "Typescript",
    icon: "typescript",
    category: "Backend",
    doc: "https://www.typescriptlang.org/docs",
  },
  {
    name: "Golang",
    icon: "go",
    category: "Backend",
    doc: "https://go.dev/doc",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "DataBase",
    doc: "https://www.postgresql.org/docs",
  },
  {
    name: "MySQL",
    icon: "mysql",
    category: "DataBase",
    doc: "https://dev.mysql.com/doc",
  },
  {
    name: "NoSQL",
    icon: "mongodb",
    category: "DataBase",
    doc: "https://www.mongodb.com/docs",
  },
  {
    name: "Redis",
    icon: "redis",
    category: "DataBase",
    doc: "https://redis.io/docs",
  },
  {
    name: "REST APIs",
    icon: "nodered",
    category: "Protocols",
    doc: "https://restfulapi.net",
  },
  {
    name: "HTTPS",
    icon: "letsencrypt",
    category: "Protocols",
    doc: "https://www.cloudflare.com/learning/ssl/what-is-https",
  },
  {
    name: "SOAP",
    icon: "swagger",
    category: "Protocols",
    doc: "https://www.w3.org/TR/soap",
  },
  {
    name: "AWS",
    icon: "amazon",
    category: "Infrastructure",
    doc: "https://docs.aws.amazon.com",
  },
  {
    name: "Google (GCP)",
    icon: "googlecloud",
    category: "Infrastructure",
    doc: "https://cloud.google.com/docs",
  },
  {
    name: "Docker",
    icon: "docker",
    category: "Infrastructure",
    doc: "https://docs.docker.com",
  },
  {
    name: "Compose",
    icon: "docsdotrs",
    category: "Infrastructure",
    doc: "https://docs.docker.com/compose",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    category: "Infrastructure",
    doc: "https://kubernetes.io/docs",
  },
  {
    name: "Terraform",
    icon: "terraform",
    category: "Infrastructure",
    doc: "https://developer.hashicorp.com/terraform/docs",
  },
  {
    name: "Datadog",
    icon: "datadog",
    category: "Infrastructure",
    doc: "https://docs.datadoghq.com",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    category: "Infrastructure",
    doc: "https://www.jenkins.io/doc",
  },
];
