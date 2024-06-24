function Contact() {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          If you would like to get in touch, please send me an email at{" "}
          <a href="mailto:your-email@example.com" className="text-primary">
            your-email@example.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
