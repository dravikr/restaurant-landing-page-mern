import React from "react";
import { CONTACT } from "../constants";

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
      <h2 className="mb-12 text-center text-3xl lg:text-4xl tracking-tight">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {CONTACT.map((detail) => (
          <div
            key={detail.key}
            className="flex-1 bg-neutral-900 text-neutral-200 p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center text-center"
          >
            <h3 className="mb-4 text-xl font-semibold">{detail.key}</h3>
            <p className="text-lg">{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
