const education = [
  {
    institution: "ИТМО",
    degree: "Бакалавр в Кафедре Технологий (ПМИ, 01.03.02)",
    period: "Сентябрь 2020 по Август 2024",
    location: "Санкт-Петербург",
    link: "https://itmo.ru/ru/viewfaculty/7/fakultet_informacionnyh_tehnologiy_i_programmirovaniya.htm",
    extra: "Из веба получено опыта: СУБД, Java (+Spring), Kotlin, сети, Vue, FreeMarker, JQuery",
    image: "ITMO.png",
  },
];

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
    <section className="flex flex-grow justify-center items-center h-full">
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
    </section>
  );
};

export default Education;
