import Badge from "../components/Badge.tsx";

const frameworks = [
  "React",
  "Redux",
  "Redux Toolkit",
  "RTK Query",
  "redux-undo",
];

const visualLibraries = ["Konva", "PIXI.js"];

const technologies = ["WebSocket", "Next.js", "Vite"];

const versionControl = ["git", "GitHub", "GitLab"];

const cssFrameworks = ["CSS", "SCSS", "TailwindCSS", "DaisyUI", "MUI"];

const languages = ["JavaScript", "TypeScript"];

const tests = ["Jest"];

const otherTechnologies = [
  "Figma",
  "Java (+Spring)",
  "Kotlin (+Ktor)",
  "PostgreSQL",
  "C++",
  "Python",
  "SQLite",
];

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
    <section className="flex items-center justify-center container mx-auto">
      <div className="container mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        These are the tools I used to make awesome projects!
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Frameworks" skills={frameworks} />
        <SkillSection title="Visual Libraries" skills={visualLibraries} />
        <SkillSection title="Technologies" skills={technologies} />
        <SkillSection title="Version Control" skills={versionControl} />
        <SkillSection title="CSS Frameworks" skills={cssFrameworks} />
        <SkillSection title="Testing" skills={tests} />
        <SkillSection title="Other Technologies" skills={otherTechnologies} />
      </div>
    </section>
  );
};

export default Skills;
