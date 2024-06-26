export const links = [
  { to: "/", label: "Домой" },
  { to: "/about", label: "О себе" },
  { to: "/education", label: "Образование" },
  { to: "/experience", label: "Опыт" },
  { to: "/projects", label: "Проекты" },
  { to: "/skills", label: "Навыки" },
  { to: "/contact", label: "Связаться" },
];

export const education = [
  {
    institution: "ИТМО",
    degree: "Бакалавр в Кафедре Технологий (ПМИ, 01.03.02)",
    period: "Сентябрь 2020 по Август 2024",
    location: "Санкт-Петербург",
    link: "https://itmo.ru/ru/viewfaculty/7/fakultet_informacionnyh_tehnologiy_i_programmirovaniya.htm",
    stack: [
      "СУБД",
      "JavaScript",
      "многопоточность",
      "сети",
      "Java (+Spring)",
      "Kotlin",
      "Vue",
      "FreeMarker",
      "JQuery",
    ],
    image: "ITMO.png",
  },
];

export const experiences = [
  {
    company: 'ООО "Судо"',
    role: "Frontend Developer",
    period: "Сентябрь 2023 - Май 2024",
    location: "Санкт-Петербург",
    description: [
      `Спроектировал и реализовал сложную и многослойную систему состояния для приложения с помощью Redux, Redux Toolkit для операций отмены и возврата, а также RTK Query для связи с бэкендом.`,
      `Коллаборация с ~5-10 разработчиками от ООО "СУДО" для создания сервиса для анализа снимков с микросокопа на Next.js и React.js с двух-недельными спринтами.`,
      `Разработал часть инструментов редактора с помощью Konva.js и TailwindCSS.`,
      `Внедрение проекта, как дипломной работы, по завершении.`,
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

export const projects = [
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
      "React",
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
      "Разработал приложение для просмотра информации о фильмах с использованием React, TypeScript и API Кинопоиска.",
      "Добавил возможнсть отображения списка фильмов, фильтрация фильмов, просмотр детальной информации о фильме с помощью компонентов MUI.",
      "Добавил персистентность на добавление в избранное с помощью react-persist.",
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
