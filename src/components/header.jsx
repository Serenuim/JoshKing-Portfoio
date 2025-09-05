import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close menu on mobile after clicking
    }
  };

  return (
    <header className="bg-[#0F0D0D] py-5 px-6 md:px-[10%] flex justify-between items-center relative">
      {/* Logo section */}
      <div className="logo flex items-center text-white font-inter cursor-pointer hover:scale-105 transition">
        <div className="bg-[#D62828] px-2 py-2 rounded-full mr-2"></div>
        <p className="font-medium text-[16px] md:text-[18px] tracking-wide capitalize">
          joshking
        </p>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex text-[#999999] items-center gap-6 font-inter text-[16px] lg:text-[17px]">
        <li onClick={() => handleScroll("about")} className="hover:scale-105 cursor-pointer transition">
          About me
        </li>
        <li onClick={() => handleScroll("service")} className="hover:scale-105 cursor-pointer transition">
          Services
        </li>
        <li onClick={() => handleScroll("projects")} className="hover:scale-105 cursor-pointer transition">
          Projects
        </li>
        <li
          onClick={() => handleScroll("contacts")}
          className="bg-[#D62828] px-6 py-2 rounded-sm hover:scale-105 cursor-pointer text-white transition"
        >
          Contact
        </li>
      </ul>

      {/* Mobile button (☰ / ✕) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-[#0F0D0D] flex flex-col items-center py-6 gap-6 text-[#999999] text-lg z-50">
          <li onClick={() => handleScroll("about")} className="hover:scale-105 cursor-pointer transition">
            About me
          </li>
          <li onClick={() => handleScroll("service")} className="hover:scale-105 cursor-pointer transition">
            Services
          </li>
          <li onClick={() => handleScroll("projects")} className="hover:scale-105 cursor-pointer transition">
            Projects
          </li>
          <li
            onClick={() => handleScroll("contacts")}
            className="bg-[#D62828] px-6 py-2 rounded-sm hover:scale-105 cursor-pointer text-white transition"
          >
            Contact
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
