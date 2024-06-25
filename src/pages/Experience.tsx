import Section from "../hoс/Section.tsx";

const experiences = [
  {
    company: 'ООО "Судо"',
    role: "Frontend Developer",
    period: "Сентябрь 2023 - Май 2024",
    location: "Санкт-Петербург",
    description: [
      `Спроектировал и реализовал сложную и многослойную систему состояния для приложения с помощью Redux, Redux Toolkit для операций отмены и возврата, а также RTK Query для связи с бэкендом.`,
      `Коллаборация с ~5-10 разработчиками от ООО "СУДО" для создания сервиса для анализа снимков с микросокопа на Next.js и React.js с двух-недельными спринтами.`,
      `Разработал часть инструментов редактора с помощью Konva.js и TailwindCSS. Внедрение проекта, как дипломной работы, по завершении.`,
    ],
    stack: [
      "Next.js",
      "React.js",
      "Konva.js",
      "Redux",
      "RTK Query",
      "TailwindCSS",
    ],
    link: "https://dev.sem.sudo.team/",
    presentation:
      "https://docs.google.com/presentation/d/1PRtpg6nmerEbOIUADNI_p7DW7NVAYoi3/edit#slide=id.g2c141fd7554_0_68",
  },
  {
    company: 'ООО "Судо"',
    role: "Frontend Developer",
    period: "Февраль 2023 - Июнь 2023",
    location: "Санкт-Петербург",
    description: [
      `Разработал фронтенд для анализа FORC кривых с двухнедельными спринтами в паре с другим фронтенд разработчиком.`,
      `Практика в университете в качестве опыта работы над реальным проектом в ООО "Судо".`,
    ],
    stack: ["React", "TypeScript", "Vite", "MathJax", "MUI"],
    link: "https://dev.forctool.com/",
  },
];

type ExperienceProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  stack: string[];
  link: string;
  presentation?: string;
};

const ExperienceCard = ({
  company,
  role,
  period,
  location,
  description,
  stack,
  link,
  presentation,
}: ExperienceProps) => (
  <div className="card w-full shadow-xl mb-8 md:w-3/4 lg:w-1/2">
    <div className="card-body">
      <h2 className="card-title text-primary">
        {role} at {company}
      </h2>
      <p className="text-sm text-secondary mb-2">
        {location} | {period}
      </p>
      {description.map((text, index) => (
        <p key={index} className="whitespace-pre-line">
          {text}
        </p>
      ))}
      <div className="mb-4">
        <strong>Стек:</strong>
        <ul className="flex flex-wrap gap-2 mt-2">
          {stack.map((skill, index) => (
            <li key={index} className="badge badge-outline">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {presentation && (
        <a
          href={presentation}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-outline"
        >
          Презентация проекта
        </a>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Страница проекта
      </a>
    </div>
  </div>
);

const Experience = () => (
  <>
    <div className="flex flex-col justify-center items-center">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          company={exp.company}
          role={exp.role}
          period={exp.period}
          location={exp.location}
          description={exp.description}
          stack={exp.stack}
          link={exp.link}
          presentation={exp.presentation}
        />
      ))}
    </div>
  </>
);

const ExperienceSection = Section(Experience, "Опыт");

export default ExperienceSection;
