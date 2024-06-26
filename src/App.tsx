import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound.tsx";
import Experience from "./pages/Experience.tsx";
import Education from "./pages/Education.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const Content = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <div className="h-dvh flex flex-col items-center">
      <div className="container sticky top-0 z-[1]">
        <Navbar />
      </div>
      <div className="container flex-grow p-4">
        <Content />
      </div>
    </div>
  );
}

export default App;
