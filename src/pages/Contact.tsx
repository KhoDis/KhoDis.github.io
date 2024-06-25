import Section from "../hoс/Section.tsx";

function Contact() {
  return (
    <>
      <p className="text-lg mb-6 text-center text-gray-700">
        Обращайтесь по почте: {" "}
        <a href="mailto:khodzhayarov.a@gmail.com"
           className="text-primary hover:text-primary-focus transition-colors duration-300">
          khodzhayarov.a@gmail.com
        </a>
      </p>
      <p className="text-lg mb-6 text-center text-gray-700">
        Или пишите в Telegram: {" "}
        <a href="https://t.me/khodis"
           className="text-primary hover:text-primary-focus transition-colors duration-300">
          @khodis
        </a>
      </p>
      <p className="text-lg mb-6 text-center text-gray-700">
        Мой GitHub: {" "}
        <a href="https://github.com/KhoDis"
           className="text-primary hover:text-primary-focus transition-colors duration-300">
          KhoDis
        </a>
      </p>
      <p className="text-lg mb-6 text-center text-gray-700">
        Телефон: {" "}
        <a href="tel:+7(932)054-12-08">+7(932)054-12-08</a>
      </p>
      <div className="flex justify-center mt-4">
        <a href="mailto:khodzhayarov.a@gmail.com"
           className="btn btn-primary btn-lg transition-transform transform hover:scale-105">
          Отправить e-mail
        </a>
      </div>
    </>
  );
}

export default Contact;
