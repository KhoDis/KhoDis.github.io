import Badge from "../components/Badge.tsx";

const projects = [
  {
    title: "Generative Pixel Art (Pet-проект)",
    description: "Разработал веб-сайт для автоматической генерации изображений в стиле Pixel Art. Разработал удобный макет приложения. Написал тесты, используя Jest, для тестирования функционала функций-генераторов.",
    link: "https://github.com/KhoDis/generative-pixel-art",
    period: "Сентябрь 2023 по текущий день",
    stack: "React.js, TypeScript, TailwindCSS, DaisyUI, Konva.js, Redux, Jest, Vite",
    stack: ["React.js", "TypeScript", "TailwindCSS", "DaisyUI", "Konva.js", "Redux", "Jest", "Vite"],
  },
  {
    title: "Веб-сайт с онлайн пазлами",
    description: "Разработал фронтенд для сайта для совместного сбора пазлов с синхронизацией между клиентами и сервером с помощью WebSocket.",
    link: "https://github.com/puzzle-online/puzzle-online",
    period: "Март 2023 - Апрель 2023",
    stack: "React, TS, MUI, WebSocket, Ktor",
    stack: ["React", "TS", "MUI", "WebSocket", "Ktor"],
  },
  {
    title: "Приложение для хранения заметок",
    description: "Заняли первое место в конкурсе проектов на курсе Android-разработка от ВК в команде из 4 человек. Использовали Figma для создания дизайна приложения, после чего наверстали. Верстали с Jetpack Compose, хранили информацию с SQLite и Exposed.",
    link: "https://github.com/Curo-app",
    period: "Март 2023 - Август 2023",
    stack: "Jetpack Compose, SQLite, Exposed",
    stack: ["Jetpack Compose", "SQLite", "Exposed"],
  },
  {
    title: "Task Manager (Pet-проект)",
    description: "Разработал полнофункциональное приложение для управления задачами с аутентификацией и авторизацией. Фронтенд: Использовал Next.js, React, TypeScript, Redux Toolkit, RTK Query и Tailwind CSS. Бэкенд: Построил REST API с Node.js, Express и MongoDB. Реализовал JWT для защиты маршрутов и аутентификации пользователей.",
    link: "https://github.com/KhoDis/task-manager",
    period: "Май 2024",
    stack: "Next.js, React, TypeScript, Redux Toolkit, RTK Query, TailwindCSS, Node.js, Express, MongoDB, JWT",
  },
];

const experiences = [
  {
    company: "ООО \"Судо\"",
    role: "Frontend Developer",
    period: "Сентябрь 2023 - Май 2024",
    location: "Санкт-Петербург",
    description: `Спроектировал и реализовал сложную и многослойную систему состояния для приложения с помощью Redux, Redux Toolkit для операций отмены и возврата, а также RTK Query для связи с бэкендом.
Коллаборация с ~5-10 разработчиками от ООО "СУДО" для создания сервиса для анализа снимков с микросокопа на Next.js и React.js с двух-недельными спринтами. Разработал часть инструментов редактора с помощью Konva.js и TailwindCSS. Внедрение проекта, как дипломной работы, по завершении.`,
    stack: "Next.js, React.js, Konva.js, Redux, RTK Query, TailwindCSS",
    link: "https://sem.sudo.team/",
  },
  {
    company: "ООО \"Судо\"",
    role: "Frontend Developer",
    period: "Февраль 2023 - Июнь 2023",
    location: "Санкт-Петербург",
    description: `Разработал фронтенд для анализа FORC кривых с двухнедельными спринтами в паре с другим фронтенд разработчиком. Практика в университете в качестве опыта работы над реальным проектом в ООО "Судо".`,
    stack: "React, TypeScript, Vite, MathJax, MUI",
    link: "https://dev.forctool.com/",
    stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "RTK Query", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT"],
  },
];

type TimelineItemProps = {
  time: string;
  title: string;
  location?: string;
  description: string;
  stack?: string[];
  link: string;
  flip?: boolean;
}

const TimelineItem = ({ time, title, location, description, stack, link, flip }: TimelineItemProps) => (
  <li>
    <hr className="bg-primary" />
    <div className="timeline-middle text-secondary-content font-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-secondary h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className={`timeline-box p-6 rounded-lg shadow-lg bg-white ${flip ? "timeline-start md:text-end" : "timeline-end"}`}>
      <time className="block text-sm mb-2">{time}</time>
      <div className="text-xl font-bold mb-2">{title}</div>
      <div className="text-md mb-2">{location}</div>
      <p className="text-md mb-2">{description}</p>
      {stack && (
        <ul className={`flex flex-wrap ${flip && "flex-row-reverse"} gap-2 mb-2`}>
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
            className="text-primary-content hover:underline">
            {link}
          </a>
        </p>
      )}
    </div>
    <hr className="bg-primary" />
  </li>
);

const Experience = () => {
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
            flip={!!(index % 2)}
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

export default Experience;
