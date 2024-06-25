import Badge from "../components/Badge.tsx";
import Section from "../hoс/Section.tsx";

const languages = [
  "JavaScript",
  "TypeScript",
  "Java (+Spring)",
  "Kotlin (+Ktor)",
  "C++",
  "Python",
];
const frameworks = [
  "React",
  "Redux",
  "Redux Toolkit",
  "RTK Query",
  "redux-undo",
  "React Router",
  "Next.js",
];
const visualLibraries = ["Konva", "PIXI.js"];
const technologies = ["WebSocket", "Vite", "PostgreSQL", "SQLite"];
const versionControl = ["git", "GitHub", "GitLab"];
const cssFrameworks = ["CSS", "SCSS", "TailwindCSS", "DaisyUI", "MUI"];
const tests = ["Jest"];
const other = ["Figma"];

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} skill={skill} />
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <>
      <p className="text-lg mb-4 text-center p-4">
        Вот инструменты, которыми я пользовался, чтобы создавать классные проекты!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 lg:w-3/4 mx-auto">
        <SkillSection title="Языки" skills={languages} />
        <SkillSection title="Фреймворки" skills={frameworks} />
        <SkillSection title="Визуальные библиотеки" skills={visualLibraries} />
        <SkillSection title="Технологии" skills={technologies} />
        <SkillSection title="Контроль Версий" skills={versionControl} />
        <SkillSection title="CSS Фреймворки" skills={cssFrameworks} />
        <SkillSection title="Тестирование" skills={tests} />
        <SkillSection title="Прочее" skills={other} />
      </div>
    </>
  );
};

const SkillsSection = Section(Skills, "Навыки");

export default SkillsSection;
