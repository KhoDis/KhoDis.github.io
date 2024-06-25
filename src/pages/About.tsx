import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="flex items-center justify-center">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row items-start gap-8">
          <img
            src="/me.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="avatar"
          />
          <div className="space-y-4 lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Адис Ходжаяров</h2>
            <p>
              Родился в 2002, в <strong>России</strong>.
            </p>
            <p>
              Текущее место проживания: <strong>Москва</strong>.
            </p>
            <p>
              Заканчиваю обучение в этом году в университете и нахожу свой энтузиазм во <strong>фронтенде</strong>. Люблю всё, что
              связано с визуалом и восприятием.
            </p>
            <p>
              Есть опыт создания успешных внедрённых проектов.
            </p>
            <p>
              В активном поиске работы.
            </p>
            <div className="mt-4">
              <NavLink to="/contact" className="btn btn-primary">
                Мои контакты
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
