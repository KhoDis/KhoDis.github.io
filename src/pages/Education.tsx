import Section from "../hoс/Section.tsx";
import { education } from "../data.ts";
import Badge from "../components/Badge.tsx";

type EducationProps = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  link: string;
  stack: string[];
  image: string;
};

const EducationHero = ({
  institution,
  degree,
  period,
  location,
  link,
  stack,
  image,
}: EducationProps) => (
  <div className="hero">
    <div className="hero-content flex-col md:flex-row items-start gap-4">
      <img
        src={image}
        className="md:max-w-sm rounded-lg shadow-md border"
        alt={institution}
      />
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">{institution}</h1>
        <p>{degree}</p>
        <p>{location}</p>
        <p>{period}</p>
        <p>
          Из веба получены знания:{" "}
          <span className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <Badge key={s} skill={s} />
            ))}
          </span>
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          О кафедре
        </a>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <>
      {education.map((edu, index) => (
        <EducationHero
          key={index}
          institution={edu.institution}
          degree={edu.degree}
          period={edu.period}
          location={edu.location}
          link={edu.link}
          stack={edu.stack}
          image={edu.image}
        />
      ))}
    </>
  );
};

const EducationSection = Section(Education, "Образование", true);

export default EducationSection;
