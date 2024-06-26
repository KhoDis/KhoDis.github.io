import Badge from "../components/Badge.tsx";
import { projects } from "../data.ts";

type TimelineItemProps = {
  index: number;
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
  index,
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
    {index > 0 && <hr className="bg-primary" />}
    <div className={`${(flip ? "timeline-start md:timeline-end" : "timeline-start md:text-end")}`}>
      {image && (
        <div className="my-4">
          <img
            src={image}
            alt={title}
            className="w-auto md:max-h-96 rounded-lg shadow-md"
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
      className={`timeline-box p-6 rounded-lg shadow-lg bg-white ${flip ? "timeline-end md:timeline-start md:text-end" : "timeline-end md:timeline-end"}`}
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
          className={`flex flex-wrap ${flip && "md:flex-row-reverse"} gap-2 mb-2`}
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
            index={index}
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
    </section>
  );
};

export default Projects;
