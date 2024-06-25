import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Домой" },
  { to: "/about", label: "О себе" },
  { to: "/education", label: "Образование" },
  { to: "/experience", label: "Опыт" },
  { to: "/projects", label: "Проекты" },
  { to: "/skills", label: "Навыки" },
  { to: "/contact", label: "Связаться" },
];

function Home() {
  return (
    <section className="flex flex-col justify-center items-center flex-grow h-full gap-8">
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold mb-4">Добро пожаловать в моё портфолио!</h2>
        <p className="text-lg">
          Я фронтенд разработчик с экспертизой в Redux и Konva.
        </p>
      </div>
      <nav className="join">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="btn join-item btn-primary">
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Home;
