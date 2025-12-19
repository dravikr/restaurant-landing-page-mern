// src/components/Footer.jsx
import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => {
          const Icon = link.icon; // Get the icon component
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon fontSize={30} className="hover:opacity-80" />
            </a>
          );
        })}
      </div>

      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        Copyright &copy; {new Date().getFullYear()} Restaura
      </p>
    </footer>
  );
};

export default Footer;
