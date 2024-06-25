import Badge from "../components/Badge.tsx";

const projects = [
  {
    title: "Generative Pixel Art (Pet-проект)",
    description: [
      "Разработал веб-сайт для автоматической генерации изображений в стиле Pixel Art.",
      "Разработал удобный макет приложения.",
      "Написал тесты, используя Jest, для тестирования функционала функций-генераторов.",
    ],
    link: "https://github.com/KhoDis/generative-pixel-art",
    period: "Сентябрь 2023 по текущий день",
    stack: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "DaisyUI",
      "Konva.js",
      "Redux",
      "Jest",
      "Vite",
    ],
    image: "pixels.gif",
  },
  {
    title: "Веб-сайт с онлайн пазлами",
    description: [
      "Разработал фронтенд для сайта для совместного сбора пазлов с синхронизацией между клиентами и сервером с помощью WebSocket.",
    ],
    link: "https://github.com/puzzle-online/puzzle-online",
    period: "Март 2023 - Апрель 2023",
    stack: ["React", "TS", "MUI", "WebSocket", "Ktor", "PIXI.js"],
    image: "puzzles.gif",
  },
  {
    title: "Приложение для хранения заметок",
    description: [
      "Заняли первое место в конкурсе проектов на курсе Android-разработка от ВК в команде из 4 человек.",
      "Использовали Figma для создания дизайна приложения, после чего наверстали.",
      "Верстали с Jetpack Compose, хранили информацию с SQLite и Exposed.",
    ],
    link: "https://github.com/Curo-app",
    period: "Март 2023 - Август 2023",
    stack: ["Jetpack Compose", "SQLite", "Exposed"],
    image: "curo.jpg",
  },
  {
    title: "Task Manager (Pet-проект)",
    description: [
      "Разработал полнофункциональное приложение для управления задачами с аутентификацией и авторизацией.",
      "Фронтенд: Использовал Next.js, React, TypeScript, Redux Toolkit, RTK Query и Tailwind CSS",
      "Бэкенд: Построил REST API с Node.js, Express и MongoDB",
      "Реализовал JWT для защиты маршрутов и аутентификации пользователей.",
    ],
    link: "https://github.com/KhoDis/task-manager",
    period: "Май 2024",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    image: "tasker.gif",
  },
  {
    title: "Movie App",
    description: [
      "Приложение для просмотра информации о фильмах с использованием React, TypeScript и API Кинопоиска.",
      "Отображение списка фильмов, фильтрация фильмов, просмотр детальной информации о фильме.",
      "Добавление фильмов в избранное с персистентностью.",
    ],
    link: "https://github.com/KhoDis/movie-app/",
    period: "Июнь 2024",
    stack: [
      "Vite",
      "React",
      "TS",
      "Redux",
      "Redux Toolkit",
      "RTK Query",
      "redux-persist",
      "MUI",
      "React Router",
    ],
    image: "movies.png",
  },
];

type TimelineItemProps = {
  time: string;
  title: string;
  location?: string;
  description: string[];
  stack?: string[];
  link: string;
  image?: string;
  flip?: boolean;
};

const TimelineItem = ({
  time,
  title,
  location,
  description,
  stack,
  link,
  image,
  flip,
}: TimelineItemProps) => (
  <li>
    <hr className="bg-primary" />
    <div className={`${!flip ? "timeline-start md:text-end" : "timeline-end"}`}>
      {image && (
        <div className="my-4">
          <img
            src={image}
            alt={title}
            className="w-auto max-h-96 rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
    <div className="timeline-middle text-secondary-content font-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-secondary h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div
      className={`timeline-box p-6 rounded-lg shadow-lg bg-white ${flip ? "timeline-start md:text-end" : "timeline-end"}`}
    >
      <time className="block text-sm mb-2">{time}</time>
      <div className="text-xl font-bold mb-2">{title}</div>
      <div className="text-md mb-2">{location}</div>
      {description.map((paragraph, index) => (
        <p key={index} className="text-md mb-2">
          {paragraph}
        </p>
      ))}
      {stack && (
        <ul
          className={`flex flex-wrap ${flip && "flex-row-reverse"} gap-2 mb-2`}
        >
          {stack.map((skill, index) => (
            <Badge key={index} skill={skill} />
          ))}
        </ul>
      )}
      {link && (
        <p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-content hover:underline"
          >
            {link}
          </a>
        </p>
      )}
    </div>
    <hr className="bg-primary" />
  </li>
);

const Projects = () => {
  return (
    <section className="flex items-start justify-center">
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
        {projects.map((proj, index) => (
          <TimelineItem
            key={index}
            time={proj.period}
            title={proj.title}
            description={proj.description}
            stack={proj.stack}
            link={proj.link}
            image={proj.image}
            flip={!(index % 2)}
          />
        ))}
      </ul>
      {/*<ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">*/}
      {/*  {education.map((edu, index) => (*/}
      {/*    <TimelineItem*/}
      {/*      key={index}*/}
      {/*      time={edu.period}*/}
      {/*      title={edu.institution}*/}
      {/*      location={edu.location}*/}
      {/*      description={edu.degree}*/}
      {/*      link={edu.link}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">*/}
      {/*  {experiences.map((exp, index) => (*/}
      {/*    <TimelineItem*/}
      {/*      key={index}*/}
      {/*      time={exp.period}*/}
      {/*      title={`${exp.company} - ${exp.role}`}*/}
      {/*      location={exp.location}*/}
      {/*      description={exp.description}*/}
      {/*      stack={exp.stack}*/}
      {/*      link={exp.link}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </section>
  );
};

export default Projects;
