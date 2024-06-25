import Section from "../hoс/Section.tsx";
import { education } from "../data.ts";

type EducationProps = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  link: string;
  extra: string;
  image: string;
};

const EducationHero = ({
  institution,
  degree,
  period,
  location,
  link,
  extra,
  image,
}: EducationProps) => (
  <div className="hero">
    <div className="hero-content flex-col lg:flex-row items-start">
      <img
        src={image}
        className="max-w-sm rounded-lg shadow-2xl"
        alt={institution}
      />
      <div className="ml-8 space-y-4">
        <h1 className="text-5xl font-bold">{institution}</h1>
        <p>{degree}</p>
        <p>{location}</p>
        <p>{period}</p>
        <p>{extra}</p>
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
          extra={edu.extra}
          image={edu.image}
        />
      ))}
    </>
  );
};

const EducationSection = Section(Education, "Образование", true);

export default EducationSection;
