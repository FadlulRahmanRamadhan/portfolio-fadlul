"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
  FaLaravel,
  FaPhp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "Visual Studio Code",
    icon: <VscVscode size={40} />,
    role: "Code Editor",
  },
  {
    name: "React Native",
    icon: <SiReact size={40} />,
    role: "Mobile Framework",
  },
  {
    name: "React JS",
    icon: <SiReact size={40} />,
    role: "Frontend Library",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
    role: "Programming Language",
  },
  {
    name: "PHP",
    icon: <FaPhp size={40} />,
    role: "Programming Language",
  },
  {
    name: "Laravel",
    icon: <FaLaravel size={40} />,
    role: "Framework",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} />,
    role: "Database",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} />,
    role: "Backend Service",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    role: "CSS Framework",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} />,
    role: "Version Control",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <main className="bg-[#0a0a1a] text-white overflow-x-hidden relative">
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-400/10 blur-[200px]" />
      </div>

      {/* Navbar - Glass Effect */}
      <nav className="fixed top-0 w-full bg-[#0a0a1a]/50 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Portofolio
          </h1>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/5 backdrop-blur-xl px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border border-white/10">
            <a
              href="#beranda"
              className="text-sm sm:text-base text-gray-300 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#tentang"
              className="text-sm sm:text-base text-gray-300 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#skill"
              className="text-sm sm:text-base text-gray-300 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#proyek"
              className="text-sm sm:text-base text-gray-300 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#kontak"
              className="text-sm sm:text-base text-gray-300 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="beranda"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-24 px-4 sm:px-8 md:px-16 lg:px-24 pt-20 sm:pt-24"
      >
        <div
          data-aos="fade-right"
          className="max-w-xl text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-fit mb-8 mx-auto md:mx-0 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <img
              src="/foto-wisuda.jpg"
              alt="Avatar"
              className="w-12 h-12 rounded-lg object-cover transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] cursor-pointer"
            />
            <div>
              <p className="text-purple-400 text-xl">❝</p>
              <p className="text-gray-300 italic text-sm">
                "Code built with persistence, designed for performance."
              </p>
            </div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Fadlul Rahman Ramadhan
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4"
          >
            Interested in Web Development • Mobile Development • IT
          </p>

          <p className="text-purple-400 mb-6 sm:mb-8">
            Computer Systems Graduate — STMIK Jaya Nusa
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
          >
            <a
              href="/cv-fadlul.pdf"
              download
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-sm sm:text-base shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]"
            >
              Download CV
            </a>

            <button
              onClick={() => {
                document
                  .getElementById("proyek")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              View Projects
            </button>
          </div>
        </div>

        <img
          data-aos="fade-left"
          data-aos-delay="300"
          src="/foto-wisuda.jpg"
          alt="Foto Wisuda"
          className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-80 lg:w-[350px] lg:h-[500px] object-cover rounded-[120px] sm:rounded-[160px] lg:rounded-[180px] border-2 border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.2)] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-2 hover:shadow-[0_0_80px_rgba(168,85,247,0.5)] cursor-pointer"
        />
      </section>

      {/* About - Glass Card */}
      <section
        id="tentang"
        data-aos="fade-up"
        className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 flex flex-col justify-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          More About Me
        </h2>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 px-6 sm:px-8 md:px-10 py-6 shadow-[0_0_40px_rgba(168,85,247,0.05)] hover:shadow-[0_0_60px_rgba(168,85,247,0.15)] transition-all duration-500">
          <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
            I am a Computer Systems graduate with a strong interest in web
            development, mobile applications, databases, and information
            technology. I have experience building applications using PHP,
            Laravel, JavaScript, React Native, MySQL, Firebase, and modern web
            technologies.
            <br />
            <br />
            Through academic projects and my thesis involving BLE and WhatsApp
            Bot integration, I developed analytical thinking, problem-solving,
            and teamwork skills.
            <br />
            <br />
            I am highly motivated to continue learning and contribute to
            innovative digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mt-8">
            <img
              src="/foto-wisuda.jpg"
              alt="Profile"
              className="w-14 h-16 rounded-md object-cover border border-purple-500/30"
            />

            <div className="flex gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 text-center border border-white/10">
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10+
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Technical Skills
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 text-center border border-white/10">
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  4+
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Glass Cards */}
      <section
        id="skill"
        data-aos="zoom-in"
        className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20"
      >
        <p className="text-purple-400 uppercase mb-2 text-sm sm:text-base">
          My Stack
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Tools & Technologies I Use
        </h2>

        <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Kombinasi teknologi yang saya gunakan membantu menciptakan solusi
          digital yang scalable, modern, dan berfokus pada performa serta
          pengalaman pengguna.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:-translate-y-2 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300"
            >
              <div className="text-purple-400">{skill.icon}</div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {skill.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects - Glass Cards with Gradient Border */}
      <section
        id="proyek"
        className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20"
      >
        <p className="text-purple-400 text-sm uppercase text-center mb-2">
          Portofolio
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
          My Projects
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base px-4">
          Berikut beberapa proyek yang telah saya kembangkan, yang berfokus pada
          aplikasi web, pengembangan aplikasi mobile, manajemen basis data, dan
          solusi berbasis IoT.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((project) => (
            <div
              key={project}
              data-aos="fade-up"
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 hover:border-purple-500/50 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {project === 1 && "Mini Cashflow Dashboard"}
                  {project === 2 && "BLE Attendance System"}
                  {project === 3 && "Parking Management System"}
                  {project === 4 && "News Portal"}
                </h3>
                <span className="border border-purple-500/50 text-purple-400 text-xs px-3 sm:px-4 py-1 rounded-full">
                  Project
                </span>
              </div>

              <p className="text-gray-400 leading-6 sm:leading-8 mb-4 sm:mb-6 text-sm sm:text-base">
                {project === 1 && "A web-based financial management application designed to record income and expenses, generate reports, and provide transaction summaries."}
                {project === 2 && "A smart attendance system developed as a final project by integrating Bluetooth Low Energy (BLE) technology with a WhatsApp Bot."}
                {project === 3 && "A web-based parking management system built using Laravel to manage vehicle entry and exit records, parking history, and automatic fee calculations."}
                {project === 4 && "A dynamic news portal website featuring article management, category organization, and an administrative dashboard."}
              </p>

              <div className="flex flex-wrap gap-2">
                {project === 1 && (
                  <>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">PHP</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">MySQL</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">Bootstrap</span>
                  </>
                )}
                {project === 2 && (
                  <>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">React Native</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">Firebase</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">BLE</span>
                  </>
                )}
                {project === 3 && (
                  <>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">Laravel</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">MySQL</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">Tailwind</span>
                  </>
                )}
                {project === 4 && (
                  <>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">PHP</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">MySQL</span>
                    <span className="border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">JavaScript</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact - Glass Cards */}
      <section
        id="kontak"
        className="px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24"
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 uppercase mb-2 text-sm sm:text-base">
            Contact Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Build Something Great Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
            Saya terbuka untuk peluang kerja, kolaborasi proyek, maupun diskusi
            seputar teknologi dan pengembangan sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300 cursor-pointer">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                rahmanfadlul229@gmail.com
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300 cursor-pointer">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">GitHub</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                github.com/FadlulRahmanRamadhan
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300 cursor-pointer">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Education</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                S1 Sistem Komputer
                <br />
                STMIK Jaya Nusa
              </p>
            </div>
          </div>

          {/* Form Contact */}
          <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300">
            <form
              action="https://formspree.io/f/mojgrnnv"
              method="POST"
              className="space-y-4 sm:space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl outline-none border border-white/10 focus:border-purple-500/50 focus:scale-[1.02] transition-all duration-300 text-sm sm:text-base text-white placeholder:text-gray-500"
              />

              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl outline-none border border-white/10 focus:border-purple-500/50 focus:scale-[1.02] transition-all duration-300 text-sm sm:text-base text-white placeholder:text-gray-500"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl outline-none border border-white/10 focus:border-purple-500/50 focus:scale-[1.02] transition-all duration-300 text-sm sm:text-base text-white placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 sm:py-4 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-white/5 mt-12 sm:mt-20">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 text-gray-400">
          <a
            href="#beranda"
            className="hover:text-purple-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#tentang"
            className="hover:text-purple-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            About
          </a>
          <a
            href="#proyek"
            className="hover:text-purple-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            Projects
          </a>
          <a
            href="#kontak"
            className="hover:text-purple-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl mb-6 sm:mb-8">
          <a
            href="https://github.com/FadlulRahmanRamadhan"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/fadlulrahmannn"
            target="_blank"
            className="text-gray-400 hover:text-pink-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-center text-gray-500 text-sm sm:text-base">
          © 2026 Fadlul Rahman Ramadhan — All Rights Reserved
        </p>

        <p className="text-center text-gray-600 mt-3 text-xs sm:text-sm">
          Built with{" "}
          <span className="text-purple-400 font-semibold">React JS</span> &{" "}
          <span className="text-pink-400 font-semibold">Tailwind CSS</span>
        </p>
      </footer>
    </main>
  );
}