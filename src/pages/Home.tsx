import { Link } from "react-router-dom";
import { links } from "../data.ts";

function Home() {
  return (
    <section className="flex flex-col justify-center items-center flex-grow h-full gap-8">
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold mb-4">
          Добро пожаловать в моё портфолио!
        </h2>
        <p className="text-lg">
          Я фронтенд разработчик с экспертизой в Redux и Konva.
        </p>
      </div>
      <nav className="join join-vertical md:join-horizontal">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="btn btn-primary join-item"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Home;
