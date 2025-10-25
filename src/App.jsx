import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-heistBlack min-h-screen text-heistGray">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects/>
          <Skills />
          <Contact/>
        </>
      )}
    </div>
  );
}
