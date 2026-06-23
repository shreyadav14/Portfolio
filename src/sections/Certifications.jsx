import React from "react";
import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    name: "HACKHERITAGE 3.0",
    type: "Hackathon",
    image: "/projects/C1.png",
    description:
      "Participated in a 24-hour hackathon and developed a food redistribution platform named FOODFLOW.",
    date: "22 September 2025 - 23 September 2025",
  },
  {
    name: "Full Stack Development Internship",
    type: "Certificate",
    image: "/projects/image.png",
    description:
      "Received internship completion certificate after successfully contributing to full-stack development projects.",
    date: "18 February 2026 - 19 March 2026",
  },
  {
    name: "Data Analyst Internship",
    type: "Internship Letter",
    image: "/projects/C3.png",
    description:
      "Awarded internship letter and completed assigned data analysis tasks involving insights and reporting.",
    date: "04 June 2026 - 04 July 2026",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certifications &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Recognition.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of certifications, internships, and hackathon
            achievements that showcase my learning journey and practical
            experience.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0
                  bg-linear-to-t from-card via-card/50
                  to-transparent opacity-60"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {certificate.name}
                    </h3>

                    <p className="text-sm text-primary mt-1">
                      {certificate.type}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="w-5 h-5
                    text-muted-foreground
                    group-hover:text-primary
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {certificate.description}
                </p>

                <div className="inline-flex px-4 py-1.5 rounded-full bg-surface border border-border/50 text-xs font-medium text-muted-foreground">
                  {certificate.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};