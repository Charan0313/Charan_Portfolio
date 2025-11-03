import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-heistBlack/60 backdrop-blur-md border-b border-heistRed z-40 shadow-md shadow-heistRed/30">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <h1 className="text-heistRed font-heading text-3xl tracking-wide">
          The Professor
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-heistGray font-body">
          {links.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative cursor-pointer group text-lg transition-colors duration-300 ${
                    isActive ? "text-heistGold" : "hover:text-heistGold"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-heistGold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-heistRed text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/3 bg-heistBlack/95 backdrop-blur-md shadow-lg shadow-heistRed/30 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-body transition-colors duration-300 ${
                  isActive ? "text-heistGold font-semibold" : "text-heistGray hover:text-heistGold"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
