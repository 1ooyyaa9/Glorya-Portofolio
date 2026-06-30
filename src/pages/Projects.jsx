import { useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle } from "../components/Heading.jsx";

const PROJECTS = [
  {
    id: "glovade",
    type: "Web App",
    year: "2024",
    title: "Glovade Library Management",
    desc: "A full-stack library management system built with Laravel, featuring book catalog, member management, borrowing system, and admin dashboard.",
    image: "/glovade.png",
    role: "Developer",
    roleColor: "accent",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/1ooyyaa9/Glovade-Library",
    status: "completed",
    features: [
      {
        name: "Book Catalog",
        desc: "Complete digital catalog with search, filter by genre, author, and availability status.",
      },
      {
        name: "Member Management",
        desc: "Register and manage library members with borrowing history and fine tracking.",
      },
      {
        name: "Smart Search",
        desc: "Real-time search across titles, authors, and ISBN numbers.",
      },
      {
        name: "Admin Dashboard",
        desc: "Full admin control over inventory, loans, returns, and member accounts.",
      },
      {
        name: "Reports",
        desc: "Generate borrowing reports, popular book statistics, and overdue summaries.",
      },
      {
        name: "Loan Tracking",
        desc: "Track active loans, due dates, and automated overdue fine calculations.",
      },
    ],
  },
  {
    id: "cafe-management",
    type: "Desktop App",
    year: "2024",
    title: "Cafe Management System",
    desc: "An application designed to assist coffee shop operations through two access levels, User and Admin, each with features tailored to their role for ordering and managing the business.",
    image: "/cafe.png",
    role: "Developer",
    roleColor: "accent",
    tags: ["Java", "MySQL", "Desktop App"],
    github: "https://github.com/1ooyyaa9/Cafe-Management",
    status: "completed",
    features: [
      {
        name: "Place Order",
        desc: "Select food or drink items, specify quantities, view total price, and print the purchase bill.",
      },
      {
        name: "Order History",
        desc: "View private history of all orders placed, inaccessible to other users.",
      },
      {
        name: "Account Security",
        desc: "Change password and security question to keep accounts secure.",
      },
      {
        name: "Manage Category",
        desc: "Admins can add, edit, or delete product categories like coffee, non-coffee drinks, and snacks.",
      },
      {
        name: "Product Management",
        desc: "Admins can add, view, edit, and delete products with details like name, category, and price.",
      },
      {
        name: "Verify Users",
        desc: "Admins review and verify newly registered users to grant system access.",
      },
    ],
  },
  {
    id: "ctf",
    type: "Cybersecurity",
    year: "2025",
    title: "CTF — Ethical Hacking Competition",
    desc: 'University final exam CTF competition focused on ethical hacking. Competed as team "Bakso Intel Khas BIN", finishing 10th out of 38 teams top 27% of all competitors.',
    image: "/ctf.png",
    role: "Competitor",
    roleColor: "accent2",
    tags: ["Ethical Hacking", "CTF", "OSINT", "Web Exploit"],
    github: null,
    status: "completed",
    badge: "10th / 38 Teams",
    features: [
      {
        name: "Network Exploitation",
        desc: "Identified and exploited vulnerabilities in network configurations and services.",
      },
      {
        name: "Cryptography",
        desc: "Decoded encrypted flags using various cryptographic techniques and tools.",
      },
      {
        name: "Web Exploitation",
        desc: "Performed SQL injection, XSS, and other web vulnerability attacks.",
      },
      {
        name: "Reverse Engineering",
        desc: "Analyzed and reversed binary files to extract hidden information.",
      },
      {
        name: "OSINT",
        desc: "Used open-source intelligence techniques to gather information and solve challenges.",
      },
      {
        name: "Steganography",
        desc: "Uncovered hidden data embedded within image and audio files.",
      },
    ],
  },
  {
    id: "urbangrind",
    type: "Website",
    year: "2025",
    title: "Urban Grind — Coffee Shop",
    desc: "A website for Urban Grind coffee shop, allowing customers to browse the menu, place orders for coffee and cakes, and learn about the shop's history and quality standards.",
    image: "/urbangrind.png",
    role: "Developer",
    roleColor: "accent2",
    tags: ["Web Design", "UI/UX", "Frontend"],
    github: "https://github.com/1ooyyaa9/Urband-Grind",
    status: "completed",
    features: [
      {
        name: "Navigation",
        desc: "Assisting users in navigating to various sections of the website.",
      },
      {
        name: "Hero Section",
        desc: "Capturing attention with large images and main text.",
      },
      {
        name: "About Us",
        desc: "Providing detailed information about the business or services.",
      },
      { name: "Services", desc: "Showcasing the main services offered." },
      {
        name: "Product Menu",
        desc: "Displaying available products such as coffee and cakes.",
      },
      {
        name: "Contact",
        desc: "Connecting users with administrators for further information.",
      },
      {
        name: "Responsive Design",
        desc: "Ensuring the website is user-friendly on both desktop and mobile devices.",
      },
      {
        name: "Interactivity",
        desc: "Adding interactivity to the elements throughout the site.",
      },
    ],
  },
];

const STATUS_LABELS = {
  completed: { label: "Completed", color: "#4DD8E8" },
  "in-progress": { label: "In Progress", color: "#E8C24D" },
  upcoming: { label: "Upcoming", color: "#7C6BFF" },
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Projects</Eyebrow>
        <SectionTitle>Things I've built, and what's next.</SectionTitle>
        <p className="text-muted text-[15px] max-w-2xl mb-10 leading-relaxed">
          A collection of projects from coursework, competitions, and personal
          builds more are currently in progress.
        </p>
      </Reveal>

      <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => {
          const statusInfo = STATUS_LABELS[project.status];
          const isPlaceholder = project.status !== "completed";

          return (
            <div
              key={project.id}
              className={`bg-surface border border-border rounded-card overflow-hidden flex flex-col transition-all hover:border-accent hover:shadow-glow ${
                isPlaceholder ? "border-dashed" : ""
              }`}
            >
              {/* Image or placeholder */}
              <div className="relative w-full h-48 overflow-hidden bg-surface-2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-muted opacity-40"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                )}
                <span className="absolute top-3 left-3 font-mono text-[11px] px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white border border-white/10">
                  {project.type}
                </span>
                <span className="absolute top-3 right-3 font-mono text-[11px] px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white border border-white/10">
                  {project.year}
                </span>
                {project.badge && (
                  <span className="absolute bottom-3 right-3 font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent/20 backdrop-blur-sm text-accent border border-accent/30">
                    🏆 {project.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: statusInfo.color,
                      boxShadow: `0 0 6px ${statusInfo.color}`,
                    }}
                  />
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.1em]"
                    style={{ color: statusInfo.color }}
                  >
                    {statusInfo.label}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>

                <div className="mb-3">
                  <span
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-md border ${
                      project.roleColor === "accent"
                        ? "text-accent border-accent/30 bg-accent/10"
                        : "text-accent2 border-accent2/30 bg-accent2/10"
                    }`}
                  >
                    Role: {project.role}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  {project.features.length > 0 ? (
                    <button
                      onClick={() =>
                        setExpanded(expanded === project.id ? null : project.id)
                      }
                      className="flex items-center gap-1.5 text-accent text-sm font-semibold transition-all hover:gap-2.5"
                    >
                      {expanded === project.id
                        ? "Hide Details"
                        : "View Project"}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform:
                            expanded === project.id
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <span className="text-muted text-[11px] font-mono italic">
                      More details soon
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted text-xs font-mono transition-colors hover:text-accent"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Expanded features */}
              {project.features.length > 0 && (
                <div
                  style={{
                    maxHeight: expanded === project.id ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.45s ease",
                  }}
                >
                  <div className="border-t border-border px-6 py-5">
                    <div className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-3">
                      Key Features
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((f) => (
                        <div
                          key={f.name}
                          className="bg-surface-2 border border-border rounded-xl p-3.5"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <div className="font-semibold text-xs">
                              {f.name}
                            </div>
                          </div>
                          <div className="text-muted text-[11px] leading-relaxed pl-3.5">
                            {f.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Reveal>
    </PageWrapper>
  );
}
