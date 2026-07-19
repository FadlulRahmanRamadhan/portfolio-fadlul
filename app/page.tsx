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
    <main className="bg-[#0f0f1a] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0f0f1a]/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">

          <h1 className="text-3xl font-bold text-purple-500">
            Portofolio
          </h1>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 bg-black/40 px-4 sm:px-8 py-3 rounded-2xl">

  <a
    href="#beranda"
    className="hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
  >
    Home
  </a>

  <a
    href="#tentang"
    className="hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
  >
    About
  </a>

  <a
    href="#skill"
    className="hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
  >
    Skills
  </a>

  <a
    href="#proyek"
    className="hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
  >
    Projects
  </a>

  <a
    href="#kontak"
    className="hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
  >
    Contact
  </a>

</div>

        </div>
      </nav>

      {/* Hero */}
          {/* Hero */}
      <section
        id="beranda"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-24 px-4 sm:px-8 md:px-16 lg:px-24 pt-24"
      >
        {/* Bagian Kiri (Text & Tombol) */}
        <div
          data-aos="fade-right"
          className="max-w-xl text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#1a1a25] border border-gray-700 rounded-2xl p-4 w-fit mb-8 mx-auto md:mx-0">
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
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-purple-500">Fadlul Rahman Ramadhan</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xl sm:text-2xl text-gray-300 mb-4"
          >
            Interested in Web Development • Mobile Development • IT
          </p>

          <p className="text-purple-400 mb-8">
            Computer Systems Graduate — STMIK Jaya Nusa
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="/cv-fadlul.pdf"
              download
              className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Download CV
            </a>

            <button
              onClick={() => {
                document
                  .getElementById("proyek")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gray-700 px-6 py-3 rounded-xl hover:bg-gray-600 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Bagian Kanan (Foto Wisuda) */}
        <img
          data-aos="fade-left"
          data-aos-delay="300"
          src="/foto-wisuda.jpg"
          alt="Foto Wisuda"
          className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-96 lg:w-[350px] lg:h-[500px] object-cover rounded-[180px] border-4 border-purple-500 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-2 hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] cursor-pointer"
        />
      </section>

      {/* About */}
     {/* About */}
{/* About */}
      <section
  id="tentang"
  data-aos="fade-up"
   className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 flex flex-col justify-center">

  <h2 className="text-5xl font-bold text-center mb-12">
    More About Me
  </h2>

 <div
  className="max-w-4xl mx-auto bg-[#1a1a25] rounded-3xl
  hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
  px-10 py-6 border border-gray-800"
>
    <p className="text-gray-300 text-[16px] leading-7">
      I am a Computer Systems graduate with a strong interest in web
      development, mobile applications, databases, and information
      technology. I have experience building applications using PHP,
      Laravel, JavaScript, React Native, MySQL, Firebase, and modern
      web technologies.

     

      Through academic projects and my thesis involving BLE and
      WhatsApp Bot integration, I developed analytical thinking,
      problem-solving, and teamwork skills.



      I am highly motivated to continue learning and contribute to
      innovative digital solutions.
    </p>

 <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mt-8">

      <img
        src="/foto-wisuda.jpg"
        alt="Profile"
        className="w-14 h-16 rounded-md object-cover"
      />

      <div className="flex gap-6">

      <div className="bg-[#242432] rounded-2xl px-10 py-6 text-center">
  <h3 className="text-4xl font-bold text-purple-500">
    10+
  </h3>

  <p className="text-gray-400 mt-2">
    Technical Skills
  </p>
</div>

<div className="bg-[#242432] rounded-2xl px-10 py-6 text-center">
  <h3 className="text-4xl font-bold text-purple-500">
    4+
  </h3>

  <p className="text-gray-400 mt-2">
    Projects
  </p>
</div>

      </div>
    </div>

  </div>
</section>
      {/* Skills */}
    <section
  id="skill"
  data-aos="zoom-in"
  
  className="min-h-screen px-24 py-20"
>

        <p className="text-purple-500 uppercase mb-2">
          My Stack
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Tools & Technologies I Use
        </h2>

        <p className="text-gray-400 mb-10">
         Kombinasi teknologi yang saya gunakan membantu menciptakan solusi digital yang scalable, modern, dan berfokus pada performa serta pengalaman pengguna.
        </p>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
            className="bg-[#1a1a25] border border-gray-700 rounded-2xl p-6
hover:-translate-y-2
hover:scale-105
hover:border-purple-500
transition-all
duration-300"
            >

              <div className="text-purple-500">
                {skill.icon}
              </div>

              <div>
                <h3 className="font-bold">
                  {skill.name}
                </h3>

              <p className="text-gray-400 text-sm">
          {skill.role}
              </p>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Projects */}
  {/* Projects */}
<section
  id="proyek"
  className="min-h-screen px-24 py-20"
>
  <p className="text-purple-500 text-sm uppercase text-center mb-2">
    Portofolio
  </p>

  <h2 className="text-6xl font-bold text-center text-purple-500 mb-6">
    My Projects
  </h2>

  <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
    Berikut beberapa proyek yang telah saya kembangkan, yang berfokus pada aplikasi web, pengembangan aplikasi mobile, manajemen basis data, dan solusi berbasis IoT.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

    {/* Project 1 */}
<div
  data-aos="fade-up"
  className="bg-[#1a1a25] border border-gray-700 rounded-3xl p-6
  hover:border-purple-500
  hover:-translate-y-2
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
  transition-all duration-300"
>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">
          Mini Cashflow Dashboard
        </h3>

        <span className="border border-purple-500 text-purple-400 text-xs px-4 py-1 rounded-full">
          Project
        </span>
      </div>

      <p className="text-gray-400 leading-8 mb-6">
        A web-based financial management application designed to record
  income and expenses, generate reports, and provide transaction
  summaries. The system helps users monitor cash flow efficiently
  through an intuitive dashboard and structured data management.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          PHP
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          MySQL
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          Bootstrap
        </span>
      </div>
    </div>

    {/* Project 2 */}
    <div
  data-aos="fade-down"
  className="bg-[#1a1a25] border border-gray-700 rounded-3xl p-6
  hover:border-purple-500
  hover:-translate-y-2
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
  transition-all duration-300"
>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">
          BLE Attendance System
        </h3>

        <span className="border border-purple-500 text-purple-400 text-xs px-4 py-1 rounded-full">
          Project
        </span>
      </div>

      <p className="text-gray-400 leading-8 mb-6">
        A smart attendance system developed as a final project by integrating
  Bluetooth Low Energy (BLE) technology with a WhatsApp Bot. The
  application verifies student locations automatically and sends
  notifications in real time to improve attendance accuracy and
  monitoring.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          React Native
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          Firebase
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          BLE
        </span>
      </div>
    </div>

    {/* Project 3 */}
    <div
  data-aos="fade-right"
  className="bg-[#1a1a25] border border-gray-700 rounded-3xl p-6
  hover:border-purple-500
  hover:-translate-y-2
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
  transition-all duration-300"
>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">
          Parking Management System
        </h3>

        <span className="border border-purple-500 text-purple-400 text-xs px-4 py-1 rounded-full">
          Project
        </span>
      </div>

      <p className="text-gray-400 leading-8 mb-6">
         A web-based parking management system built using Laravel to manage
  vehicle entry and exit records, parking history, and automatic fee
  calculations. The application improves operational efficiency through
  structured data processing and reporting features.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          Laravel
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          MySQL
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          Tailwind
        </span>
      </div>
    </div>

    {/* Project 4 */}
   <div
  data-aos="fade-left"
  className="bg-[#1a1a25] border border-gray-700 rounded-3xl p-6
  hover:border-purple-500
  hover:-translate-y-2
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
  transition-all duration-300"
>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">
          News Portal
        </h3>

        <span className="border border-purple-500 text-purple-400 text-xs px-4 py-1 rounded-full">
          Project
        </span>
      </div>

      <p className="text-gray-400 leading-8 mb-6">
         A dynamic news portal website featuring article management, category
  organization, and an administrative dashboard. The platform allows
  administrators to publish and manage content efficiently while
  providing users with an organized reading experience.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          PHP
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          MySQL
        </span>

        <span className="border border-gray-600 px-3 py-1 rounded-full text-sm">
          JavaScript
        </span>
      </div>
    </div>

  </div>
</section>

      {/* Contact */}
      {/* Contact */}
{/* Contact */}
<section
  id="kontak"
 className="px-6 md:px-12 lg:px-24 py-24"
  data-aos="fade-up"
>
  <div className="max-w-5xl mx-auto text-center">
    <p className="text-purple-500 uppercase mb-2">
      Contact Me
    </p>

    <h2 className="text-5xl font-bold mb-4">
      Let's Build Something Great Together
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
      Saya terbuka untuk peluang kerja, kolaborasi proyek, maupun diskusi
      seputar teknologi dan pengembangan sistem.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    {/* Informasi kontak */}
    <div className="space-y-6">

      <div
        className="bg-[#1a1a25] p-6 rounded-2xl border border-gray-800
        hover:border-purple-500
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
        transition-all duration-300 cursor-pointer"
      >        <h3 className="text-xl font-semibold mb-2">
          Email
        </h3>

        <p className="text-gray-400">
          rahmanfadlul229@gmail.com
        </p>
      </div>

      <div
        className="bg-[#1a1a25] p-6 rounded-2xl border border-gray-800
        hover:border-purple-500
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
        transition-all duration-300 cursor-pointer"
      >
        <h3 className="text-xl font-semibold mb-2">
          GitHub
        </h3>

        <p className="text-gray-400">
          github.com/FadlulRahmanRamadhan
        </p>
      </div>

      <div
        className="bg-[#1a1a25] p-6 rounded-2xl border border-gray-800
        hover:border-purple-500
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
        transition-all duration-300 cursor-pointer"
      >
        <h3 className="text-xl font-semibold mb-2">
          Education
        </h3>

        <p className="text-gray-400">
          S1 Sistem Komputer
          <br />
          STMIK Jaya Nusa
        </p>
      </div>

    </div>

    {/* Form kontak */}
    <div
      className="bg-[#1a1a25] p-8 rounded-2xl border border-gray-800
      hover:border-purple-500
      hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
      transition-all duration-300"
    >
      <form className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-[#242432]
          outline-none border border-transparent
          focus:border-purple-500
          focus:scale-[1.02]
          transition-all duration-300"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-[#242432]
          outline-none border border-transparent
          focus:border-purple-500
          focus:scale-[1.02]
          transition-all duration-300"
        />

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full p-4 rounded-xl bg-[#242432]
          outline-none border border-transparent
          focus:border-purple-500
          focus:scale-[1.02]
          transition-all duration-300"
        />

        <button
          className="w-full bg-purple-600 py-4 rounded-xl
          hover:bg-purple-700
          hover:scale-105
          hover:-translate-y-1
          transition-all duration-300"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>

{/* Footer */}
<footer className="py-10 border-t border-gray-800 mt-20">

  {/* Menu Footer */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 text-gray-400">
    
    <a href="#beranda" className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300">
      Home
    </a>

    <a href="#tentang" className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300">
      About
    </a>

    <a href="#proyek" className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300">
      Projects
    </a>

    <a href="#kontak" className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300">
      Contact
    </a>

  </div>

  {/* Social Media */}
  <div className="flex justify-center gap-8 text-3xl mb-8">

    <a
      href="https://github.com/FadlulRahmanRamadhan"
      target="_blank"
      className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300"
    >
      <FaGithub />
    </a>

    <a
      href="https://instagram.com/fadlulrahmannn"
      target="_blank"
      className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300"
    >
      <FaInstagram />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      className="hover:text-purple-500
hover:scale-125
hover:-translate-y-1
transition-all duration-300"
    >
      <FaLinkedin />
    </a>

  </div>

  {/* Copyright */}
  <p className="text-center text-gray-400">
    © 2026 Fadlul Rahman Ramadhan — All Rights Reserved
  </p>

  {/* Tech Stack */}
  <p className="text-center text-gray-500 mt-3">
    Built with{" "}
    <span className="text-purple-500 font-semibold">
      React JS
    </span>{" "}
    &{" "}
    <span className="text-purple-500 font-semibold">
      Tailwind CSS
    </span>
  </p>

</footer>

</main>
  );
}