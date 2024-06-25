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
      <p className="text-lg mb-8 text-center">
        These are the tools I used to make awesome projects!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Frameworks" skills={frameworks} />
        <SkillSection title="Visual Libraries" skills={visualLibraries} />
        <SkillSection title="Technologies" skills={technologies} />
        <SkillSection title="Version Control" skills={versionControl} />
        <SkillSection title="CSS Frameworks" skills={cssFrameworks} />
        <SkillSection title="Testing" skills={tests} />
        <SkillSection title="Other" skills={other} />
      </div>
    </>
  );
};

const SkillsSection = Section(Skills, "Навыки");

export default SkillsSection;
