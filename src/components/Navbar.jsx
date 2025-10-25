import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for open/close

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-heistBlack/60 backdrop-blur-md border-b border-heistRed z-40 shadow-md shadow-heistRed/30">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <h1 className="text-heistRed font-heading text-3xl tracking-wide">
          The Professor
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-heistGray font-body">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative cursor-pointer group text-lg hover:text-heistGold transition-colors duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-heistRed group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
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
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-heistGray text-2xl font-body hover:text-heistGold transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
