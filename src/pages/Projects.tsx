const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1.",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card shadow-lg compact bg-white p-6">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-primary mt-4 inline-block">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
