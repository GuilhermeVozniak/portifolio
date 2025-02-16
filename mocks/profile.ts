export interface LinkedinProfile {
  success: boolean;
  credits_left: number;
  rate_limit_left: number;
  person: Person;
  company: Company;
}

export interface Person {
  publicIdentifier: string;
  linkedInIdentifier: string;
  memberIdentifier: string;
  linkedInUrl: string;
  firstName: string;
  lastName: string;
  headline: string;
  location: string;
  summary: string;
  photoUrl: string;
  backgroundUrl: string;
  openToWork: boolean;
  premium: boolean;
  pronoun: string | null;
  showVerificationBadge: boolean;
  creationDate: CreationDate;
  followerCount: number;
  positions: Positions;
  schools: Schools;
  skills: string[];
  languages: string[];
  recommendations: Recommendations;
  certifications: Certifications;
  testScores: TestScores;
  volunteeringExperiences: VolunteeringExperiences;
}

export interface CreationDate {
  month: number;
  year: number;
}

export interface Positions {
  positionsCount: number;
  positionHistory: PositionHistory[];
}

export interface PositionHistory {
  title: string;
  companyName: string;
  companyLocation: string;
  description: string;
  startEndDate: StartEndDate;
  contractType?: string;
  companyLogo: string;
  linkedInUrl: string;
  linkedInId: string;
}

export interface StartEndDate {
  start: DateInfo;
  end: DateInfo | null;
}

export interface DateInfo {
  month: number | null;
  year: number | null;
}

export interface Schools {
  educationsCount: number;
  educationHistory: EducationHistory[];
}

export interface EducationHistory {
  degreeName: string;
  fieldOfStudy: string;
  description: string;
  linkedInUrl: string;
  schoolLogo: string;
  schoolName: string;
  startEndDate: StartEndDate;
}

export interface Recommendations {
  recommendationsCount: number;
  recommendationHistory: RecommendationHistory[];
}

export interface RecommendationHistory {
  caption: string;
  description: string;
  authorFullname: string;
  authorUrl: string;
}

export interface Certifications {
  certificationsCount: number;
  certificationHistory: CertificationHistory[];
}

export interface CertificationHistory {
  name: string;
  organizationName: string;
  organizationUrl: string;
  issuedDate: string;
}

export interface TestScores {
  testScoresCount: number;
  // testScoreHistory: TestScore[];
  testScoreHistory: unknown;
}

// export interface TestScore {}

export interface VolunteeringExperiences {
  volunteeringExperiencesCount: number;
  // volunteeringExperienceHistory: VolunteeringExperience[];
  volunteeringExperienceHistory: unknown;
}

// export interface VolunteeringExperience {}

export interface Company {
  linkedInId: string;
  name: string;
  universalName: string;
  linkedInUrl: string;
  employeeCount: number;
  followerCount: number;
  employeeCountRange: EmployeeCountRange;
  websiteUrl: string;
  tagline: string;
  description: string | null;
  industry: string;
  phone: string | null;
  specialities: string[];
  headquarter: Headquarter;
  logo: string;
  fundingData: null;
  backgroundUrl: string;
}

export interface EmployeeCountRange {
  start: number;
  end: number;
}

export interface Headquarter {
  city: string | null;
  country: string | null;
  postalCode: string | null;
  geographicArea: string | null;
  street1: string | null;
  street2: string | null;
}

const profile: LinkedinProfile = {
  success: true,
  credits_left: 1224,
  rate_limit_left: 1000,
  person: {
    publicIdentifier: "guilherme-vozniak",
    linkedInIdentifier: "ACoAAB5RqUEBGUtJM7xOpLPabl0z1Qb7IcAHHx4",
    memberIdentifier: "508668225",
    linkedInUrl: "https://www.linkedin.com/in/guilherme-vozniak",
    firstName: "Guilherme",
    lastName: "V.",
    headline: "Software Engineer | Security Researcher",
    location: "Rota d'Imagna, Lombardy, Italy",
    summary:
      "Software developer with over 6 years of experience, I have been deeply immersed in driving advancements in the tech realm, specializing in JavaScript/Typescript, React, React Native, Go, and Node. I possess adeptness in both SQL and NoSQL databases.\n\nLeveraging these cutting-edge technologies, I craft top-tier web applications that stand out in terms of quality, value, and performance. My ability to swiftly grasp new languages and technologies, coupled with my knack for seamlessly adapting to industry shifts and surmounting obstacles, underscores my agility and consistency.\n\nMy intrinsic enthusiasm and proactive approach are pivotal aspects of my professional arsenal, ensuring that I remain up-to-date and continually seek fresh insights to elevate my prowess as a software developer. Connect with me to explore how I can contribute to your digital initiatives.",
    photoUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQEjhuqacAMvjw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714521778456?e=1745452800&v=beta&t=qoshCku3m5uz8htg9rLDjCxhLTXAMYgal7su1a862EY",
    backgroundUrl:
      "https://media.licdn.com/dms/image/v2/D5616AQGTaXdfSzK_dw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1714521971194?e=1745452800&v=beta&t=cQtISuhy8AnOOpFRL9WXKnJeWXyRZbE3KsTuGUTUS9s",
    openToWork: false,
    premium: true,
    pronoun: null,
    showVerificationBadge: true,
    creationDate: {
      month: 6,
      year: 2016,
    },
    followerCount: 171,
    positions: {
      positionsCount: 7,
      positionHistory: [
        {
          title: "Senior Software Engineer",
          companyName: "Talent Stream Group",
          companyLocation: "Remote",
          description:
            "Skills: NestJS · Node.js · Terraform · Amazon Web Services (AWS) · Next.js · reactjs · PostgreSQL · Amazon SQS",
          startEndDate: {
            start: {
              month: 2,
              year: 2025,
            },
            end: null,
          },
          contractType: "Full-time",
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C560BAQFB83oMQ4-jfw/company-logo_400_400/company-logo_400_400/0/1668892533890/talentstreams_logo?e=1747872000&v=beta&t=632gw1s3-4yPqYc5vtksTZHKT8iA93Gar1SrePwxVVk",
          linkedInUrl: "https://www.linkedin.com/company/89800850/",
          linkedInId: "89800850",
        },
        {
          title: "Technical Lead",
          companyName: "atena.io",
          companyLocation: "Remote",
          description:
            "Skills: Golang · Amazon Web Services (AWS) · React.js · PostgreSQL · MongoDB · REST APIs · RESTful WebServices · TypeScript · JavaScript · Git · GitHub · Datadog · Cybersecurity · Agile Methodologies · SOAP",
          startEndDate: {
            start: {
              month: 12,
              year: 2024,
            },
            end: {
              month: 2,
              year: 2025,
            },
          },
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C4D0BAQH3ooJYag_atw/company-logo_400_400/company-logo_400_400/0/1631307621422?e=1747872000&v=beta&t=Wl2f0tubpnSUG8S6MlXnD2WiUJaFh4l98x6sqNvDKRI",
          linkedInUrl: "https://www.linkedin.com/company/17898228/",
          linkedInId: "17898228",
        },
        {
          title: "Senior Software Engineer",
          companyName: "atena.io",
          companyLocation: "Remote",
          description:
            "Skills: Golang · GORM · TypeScript · JavaScript · React.js · Docker · Kubernetes · Google Cloud Platform (GCP) · MySQL · Git · GitHub · Jenkins · REST APIs · RESTful WebServices · Cybersecurity · Agile Methodologies · Data Structures · SOAP",
          startEndDate: {
            start: {
              month: 1,
              year: 2023,
            },
            end: {
              month: 12,
              year: 2024,
            },
          },
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C4D0BAQH3ooJYag_atw/company-logo_400_400/company-logo_400_400/0/1631307621422?e=1747872000&v=beta&t=Wl2f0tubpnSUG8S6MlXnD2WiUJaFh4l98x6sqNvDKRI",
          linkedInUrl: "https://www.linkedin.com/company/17898228/",
          linkedInId: "17898228",
        },
        {
          title: "Software Engineer",
          companyName: "atena.io",
          companyLocation: "Remote",
          description:
            "Skills: JavaScript · Node.js · NestJS · Java · SQL · MySQL · NoSQL · MongoDB · React.js · React Native · AngularJS · Git · GitHub · TypeORM · Docker · Kubernetes · Amazon Web Services (AWS) · Software Infrastructure · Cybersecurity · Linux · REST APIs · RESTful WebServices · Agile Methodologies · Data Structures",
          startEndDate: {
            start: {
              month: 10,
              year: 2022,
            },
            end: {
              month: 1,
              year: 2023,
            },
          },
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C4D0BAQH3ooJYag_atw/company-logo_400_400/company-logo_400_400/0/1631307621422?e=1747872000&v=beta&t=Wl2f0tubpnSUG8S6MlXnD2WiUJaFh4l98x6sqNvDKRI",
          linkedInUrl: "https://www.linkedin.com/company/17898228/",
          linkedInId: "17898228",
        },
        {
          title: "Software Developer",
          companyName: "Colégio Piedade",
          companyLocation: "Recife, Pernambuco, Brasil",
          description:
            "Skills: JavaScript · TypeScript · React.js · NestJS · Node.js · SQL · NoSQL · MongoDB · Git · GitHub · Linux · Amazon Web Services (AWS) · Adobe Illustrator · Adobe Photoshop · Cybersecurity · REST APIs · RESTful WebServices",
          startEndDate: {
            start: {
              month: 1,
              year: 2021,
            },
            end: {
              month: 12,
              year: 2022,
            },
          },
          contractType: "Full-time",
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C4E0BAQFsAZlJau1N4Q/company-logo_400_400/company-logo_400_400/0/1631326376992?e=1747872000&v=beta&t=5sgYV29mx7jYjOXmYlcCvKFR4UJIvSiXbrGq0qBZN4g",
          linkedInUrl: "https://www.linkedin.com/company/25070816/",
          linkedInId: "25070816",
        },
        {
          title: "Bug hunter",
          companyName: "Mercado Livre Brasil",
          companyLocation: "São Paulo, Brazil · Remote",
          description:
            "Skills: Cybersecurity · Web Application Firewalls · Penetration Testing",
          startEndDate: {
            start: {
              month: 11,
              year: 2021,
            },
            end: {
              month: 11,
              year: 2021,
            },
          },
          contractType: "Indirect Contract",
          companyLogo:
            "https://media.licdn.com/dms/image/v2/D560BAQGoQK6O-FQflw/company-logo_400_400/company-logo_400_400/0/1711464548739/mercadolivre_com_logo?e=1747872000&v=beta&t=KyrVZIJmSsNTtgefCu9cqbnsD5zzmw0R8t8pQ2LUsu8",
          linkedInUrl: "https://www.linkedin.com/company/534219/",
          linkedInId: "534219",
        },
        {
          title: "Software Developer",
          companyName: "Sky Software",
          companyLocation: "São Paulo, Brazil · On-site",
          description:
            "Skills: Node.js · React.js · Angular · Express.js · Cybersecurity · SQL · MySQL · REST APIs · RESTful WebServices",
          startEndDate: {
            start: {
              month: 9,
              year: 2018,
            },
            end: {
              month: 12,
              year: 2020,
            },
          },
          contractType: "Full-time",
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C560BAQHNwydG3x6pIQ/company-logo_400_400/company-logo_400_400/0/1631302402079?e=1747872000&v=beta&t=FlWWZDFnlmplETyNGZoHKyu2bH6DRhXXxh3uDE2uNzM",
          linkedInUrl: "https://www.linkedin.com/company/1148387/",
          linkedInId: "1148387",
        },
      ],
    },
    schools: {
      educationsCount: 2,
      educationHistory: [
        {
          degreeName: "Bachelor's degree",
          fieldOfStudy: "Computer Software Engineering",
          description:
            "Skills: Golang · React.js · Node.js · React Native · TypeScript · Scrum · Inglês · Linux",
          linkedInUrl: "https://www.linkedin.com/company/4035/",
          schoolLogo:
            "https://media.licdn.com/dms/image/v2/C560BAQFRMyoXTVO86A/company-logo_400_400/company-logo_400_400/0/1646864910688/brigham_young_university_logo?e=1747872000&v=beta&t=k-SF-hp2hzyKJG7CohgvMt2jShmTC8ROB_sNAADqTS8",
          schoolName: "Brigham Young University",
          startEndDate: {
            start: {
              month: null,
              year: null,
            },
            end: {
              month: null,
              year: null,
            },
          },
        },
        {
          degreeName: "Bachelor's degree",
          fieldOfStudy: "Computer Software Development ",
          description:
            "Skills: React.js · Git · MongoDB · Express.js · Node.js · golang · Inglês · MySQL · Linux · Golang · JavaScript · NestJS · Cybersecurity · Estruturas de dados · GitHub",
          linkedInUrl: "https://www.linkedin.com/company/10616775/",
          schoolLogo:
            "https://media.licdn.com/dms/image/v2/D4D0BAQEHVoZbmsuAVQ/company-logo_400_400/company-logo_400_400/0/1665279440255?e=1747872000&v=beta&t=kvLTZYInLnTeaRK5eA7Hv_xR8zwuaAcWTs-jb5tYTRI",
          schoolName: "UNINASSAU",
          startEndDate: {
            start: {
              month: null,
              year: null,
            },
            end: {
              month: null,
              year: null,
            },
          },
        },
      ],
    },
    skills: [
      "Amazon SQS",
      "Terraform",
      "Next.js",
      "reactjs",
      "Datadog",
      "PostgreSQL",
      "JDK",
      "JRE",
      "Computer Science",
      "Hypertext Transfer Protocol Secure (HTTPS)",
      "Data Architecture",
      "DBSM",
      "Django",
      "Programming",
      "API Development",
      "API",
      "Web Services API",
      "Agile Methodologies",
      "Jenkins",
      "GORM",
      "Data Structures",
      "Search Algorithms",
      "SOAP",
      "REST APIs",
      "RESTful WebServices",
      "Web Application Firewalls",
      "Penetration Testing",
      "NoSQL",
      "Software Infrastructure",
      "Software Design",
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Kubernetes",
      "SQL",
      "Vue.js",
      "Security",
      "Fraud Prevention",
      "Cybersecurity",
      "Angular",
      "Golang",
    ],
    languages: ["English", "Portuguese"],
    recommendations: {
      recommendationsCount: 4,
      recommendationHistory: [
        {
          caption:
            "December 3, 2024, Arthur worked with Guilherme on the same team",
          description:
            "I had the pleasure to work with Guilherme for two years, collaborating on two major projects, TRVLR and Kikkin Bank, and it is with delight that I recommend him, as an accomplished developer and a great teammate.\n\nIn his work, Guilherme showed impeccable technical skills, profound analytical thinking and a remarkable level of flexibility in meeting complex requirements of a project. In the course of the TRVLR project, he was mainly involved in the development of key features and their optimization, which handled the operational and scalability of the platform. Also during the Kikkin Bank project, Guilherme applied his knowledge of secure and effective solutions,  contributing in the application generating a nice user experience.",
          authorFullname: "Arthur Sponchiado",
          authorUrl: "https://www.linkedin.com/in/arthur-sponchiado-601562150",
        },
        {
          caption:
            "June 21, 2024, Guilherme was senior to Henrique but didn't manage Henrique directly",
          description:
            "I have worked with Guilherme for about a year and, with over five years of programming experience, I can say that he is the best programmer I have ever worked with. Guilherme excels in both hard and soft skills. He is extremely diligent and resilient, demonstrating excellent communication and great performance when faced with big challenges.\n\nGuilherme has exceptional skills in both front-end and back-end software development. He is able to effectively align with Product Owners (PO) and Quality Assurance (QA), which contributes to his performance. His analytical skills are remarkable, and his passion for technology is evident in his work and he has a high self-esteem.\n\nHe cares deeply about code quality and software architecture, always seeking best practices. In addition, Guilherme has integrity and an excellent ability to work in a team, making him a valuable member of any project.",
          authorFullname: "Henrique Mauler",
          authorUrl: "https://www.linkedin.com/in/henrique-mauler-35292092",
        },
        {
          caption: "May 8, 2024, F. Phillip managed Guilherme directly",
          description:
            "Guilherme has been an incredible asset to our team. He is a diligent and hard worker. He's honest and thoughtful and stays positive through the challenges. His english is excellent and we have relied on him many times to interface with our 3rd party vendors. Guilherme has been our go-to for our largest and most complicated projects. I truly enjoy working with him and we are grateful to have him on our team.",
          authorFullname: "F. Phillip Harnsberger",
          authorUrl: "https://www.linkedin.com/in/harns",
        },
        {
          caption:
            "February 4, 2024, Guilherme was senior to Arthur but didn't manage Arthur directly",
          description:
            "I worked closely with Guilherme for several months on the development of version 2 of a startup product called TRVLR, where he took on the role of technical leader within the development team.\n\nIn our international work setting, Guilherme displayed excellent communication skills in English. He is well-versed in both backend and frontend development and consistently shared his knowledge with the team. Guilherme has the ability to smoothly translate client requirements into the business logic of the code.\n\nIn a work environment characterized by tight deadlines and frequent reprioritization, Guilherme showed exceptional adaptability. His skill in combining technical excellence with effective communication made him a valuable asset to our collaborative efforts. I wholeheartedly recommend Guilherme for his technical expertise, leadership skills, and commitment to delivering high-quality results in dynamic and fast-paced environments.",
          authorFullname: "Arthur Sena",
          authorUrl: "https://www.linkedin.com/in/senaarth",
        },
      ],
    },
    certifications: {
      certificationsCount: 20,
      certificationHistory: [
        {
          name: "Relational Database with Go: Build an Article Search Engine",
          organizationName: "Coursera",
          organizationUrl: "https://www.linkedin.com/company/2453129/",
          issuedDate: "Issued Jan 2025",
        },
        {
          name: "Concurrency in Go",
          organizationName:
            "University of California, Irvine Division of Continuing Education",
          organizationUrl: "https://www.linkedin.com/company/277020/",
          issuedDate: "Issued Dec 2024",
        },
        {
          name: "Creating PDFs with Go and Cloud Run",
          organizationName: "Google Cloud Training Online",
          organizationUrl: "https://www.linkedin.com/company/82588954/",
          issuedDate: "Issued Dec 2024",
        },
        {
          name: "Functions, Methods, and Interfaces in Go",
          organizationName:
            "University of California, Irvine Division of Continuing Education",
          organizationUrl: "https://www.linkedin.com/company/277020/",
          issuedDate: "Issued Dec 2024",
        },
        {
          name: "Getting Started with Go",
          organizationName:
            "University of California, Irvine Division of Continuing Education",
          organizationUrl: "https://www.linkedin.com/company/277020/",
          issuedDate: "Issued Dec 2024",
        },
        {
          name: "Programming with Google Go",
          organizationName:
            "University of California, Irvine Division of Continuing Education",
          organizationUrl: "https://www.linkedin.com/company/277020/",
          issuedDate: "Issued Dec 2024",
        },
        {
          name: "How Computers Work",
          organizationName: "University of London",
          organizationUrl: "https://www.linkedin.com/company/166649/",
          issuedDate: "Issued Nov 2024",
        },
        {
          name: "Introduction to Computer Programming ",
          organizationName: "University of London",
          organizationUrl: "https://www.linkedin.com/company/166649/",
          issuedDate: "Issued Nov 2024",
        },
        {
          name: "Database Architecture, Scale, and NoSQL with Elasticsearch",
          organizationName: "University of Michigan",
          organizationUrl: "https://www.linkedin.com/company/2516/",
          issuedDate: "Issued Oct 2024",
        },
        {
          name: "Programming in Python",
          organizationName: "Meta",
          organizationUrl: "https://www.linkedin.com/company/10667/",
          issuedDate: "Issued Oct 2024",
        },
        {
          name: "Introduction to Back-End Development",
          organizationName: "Meta",
          organizationUrl: "https://www.linkedin.com/company/10667/",
          issuedDate: "Issued Sep 2024",
        },
        {
          name: "Coding Interview Preparation",
          organizationName: "Meta",
          organizationUrl: "https://www.linkedin.com/company/10667/",
          issuedDate: "Issued Aug 2024",
        },
        {
          name: "Go: Developing a REST API",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Jun 2023",
        },
        {
          name: "Go: Google's programing language",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued May 2023",
        },
        {
          name: "Angular: Introduction to the framework",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Mar 2023",
        },
        {
          name: "Java JRE e JDK: compile and execute your programs",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Mar 2023",
        },
        {
          name: "Docker: Creating containers without having headaches",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Dec 2022",
        },
        {
          name: "React Native: Creating an APP",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Nov 2022",
        },
        {
          name: "Git e Github: Own and share your code",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Sep 2022",
        },
        {
          name: "Organizing agile teams: The different roles inside a team",
          organizationName: "Alura",
          organizationUrl: "https://www.linkedin.com/company/3824181/",
          issuedDate: "Issued Sep 2022",
        },
      ],
    },
    testScores: {
      testScoresCount: 0,
      testScoreHistory: [],
    },
    volunteeringExperiences: {
      volunteeringExperiencesCount: 0,
      volunteeringExperienceHistory: [],
    },
  },
  company: {
    linkedInId: "89800850",
    name: "Talent Stream Group",
    universalName: "talentstreamgroup",
    linkedInUrl: "https://www.linkedin.com/company/89800850",
    employeeCount: 16,
    followerCount: 1016,
    employeeCountRange: {
      start: 2,
      end: 10,
    },
    websiteUrl: "https://talentstream.co",
    tagline: "Recruiting & Staffing Services",
    description: null,
    industry: "Staffing and Recruiting",
    phone: null,
    specialities: [],
    headquarter: {
      city: null,
      country: null,
      postalCode: null,
      geographicArea: null,
      street1: null,
      street2: null,
    },
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFB83oMQ4-jfw/company-logo_400_400/company-logo_400_400/0/1668892533890/talentstreams_logo?e=1747872000&v=beta&t=632gw1s3-4yPqYc5vtksTZHKT8iA93Gar1SrePwxVVk",
    fundingData: null,
    backgroundUrl:
      "https://media.licdn.com/dms/image/v2/D561BAQHTHi_QHceeJQ/company-background_10000/company-background_10000/0/1668892660446/talentstreams_cover?e=1740308400&v=beta&t=7Ldzk2C8LLpEdgNJvC4IKvtxi0qjsU00zg4SayBWcio",
  },
};

export default profile;
