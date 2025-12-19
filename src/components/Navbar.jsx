import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 z-50 w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="logo" width={80} />
        <div className="hidden lg:flex space-x-6">
          {LINKS.map((link, i) => (
            <a key={i} href={`#${link.targetId}`} className="text-sm hover:opacity-50" onClick={(e) => handleScroll(e, link.targetId)}>{link.text}</a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>{isMobileMenuOpen ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, i) => (
            <a key={i} href={`#${link.targetId}`} className="block p-4 uppercase" onClick={(e) => handleScroll(e, link.targetId)}>
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
