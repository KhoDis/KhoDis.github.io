import Section from "../hoс/Section.tsx";
import { experiences } from "../data.ts";

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
