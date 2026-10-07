"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

/* ============================================================
   DATA
============================================================ */

const skills = [
  { name: "Visual Studio Code", icon: <VscVscode size={38} />, role: "Code Editor" },
  { name: "React Native", icon: <SiReact size={38} />, role: "Mobile Framework" },
  { name: "React JS", icon: <SiReact size={38} />, role: "Frontend Library" },
  { name: "JavaScript", icon: <SiJavascript size={38} />, role: "Programming Language" },
  { name: "PHP", icon: <FaPhp size={38} />, role: "Programming Language" },
  { name: "Laravel", icon: <FaLaravel size={38} />, role: "Framework" },
  { name: "MySQL", icon: <SiMysql size={38} />, role: "Database" },
  { name: "Firebase", icon: <SiFirebase size={38} />, role: "Backend Service" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={38} />, role: "CSS Framework" },
  { name: "GitHub", icon: <FaGithub size={38} />, role: "Version Control" },
];

type ProjectType = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  status: "Online" | "Project";
};

const liveProjects: ProjectType[] = [
  {
    title: "Jaya Home Inovasi",
    image: "/projects/jaya-home-inovasi.png",
    description:
      "Website perusahaan Jaya Home Inovasi yang menampilkan informasi perusahaan, produk, layanan, dan informasi bisnis secara profesional.",
    tech: ["Laravel", "PHP", "MySQL"],
    link: "https://jayahomeinovasi.com",
    linkLabel: "🌐 Lihat Website",
    status: "Online",
  },
  {
    title: "Stock Barang Jaya Home Inovasi",
    image: "/projects/stock-barang.png",
    description:
      "Aplikasi manajemen stok barang untuk mengelola barang masuk, barang keluar, stok akhir, serta laporan persediaan secara terstruktur.",
    tech: ["Laravel", "PHP", "MySQL"],
    link: "https://jayahomeinovasi.com/stock",
    linkLabel: "📦 Buka Aplikasi",
    status: "Online",
  },
  {
    title: "Sistem Penjualan Jaya Home Inovasi",
    image: "/projects/penjualan.png",
    description:
      "Aplikasi penjualan dan manajemen bisnis untuk mengelola data barang, pelanggan, transaksi penjualan, invoice, pembayaran, piutang, surat jalan, serta laporan secara terintegrasi.",
    tech: ["React", "Laravel", "MySQL"],
    link: "https://app.jayahomeinovasi.com",
    linkLabel: "🛒 Buka Aplikasi Penjualan",
    status: "Online",
  },
];

const portfolioProjects: ProjectType[] = [
  {
    title: "Mini Cashflow Dashboard",
    image: "/projects/cashflow.png",
    description:
      "A web-based financial management application designed to record income and expenses, generate reports, and provide transaction summaries. The system helps users monitor cash flow efficiently through an intuitive dashboard and structured data management.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    status: "Project",
  },
  {
    title: "BLE Attendance System",
    image: "/projects/ble-attendance.png",
    description:
      "A smart attendance system developed as a final project by integrating Bluetooth Low Energy (BLE) technology with a WhatsApp Bot. The application verifies student locations automatically and sends notifications in real time to improve attendance accuracy and monitoring.",
    tech: ["React Native", "Firebase", "BLE"],
    status: "Project",
  },
  {
    title: "Parking Management System",
    image: "/projects/parking.png",
    description:
      "A web-based parking management system built using Laravel to manage vehicle entry and exit records, parking history, and automatic fee calculations. The application improves operational efficiency through structured data processing and reporting features.",
    tech: ["Laravel", "MySQL", "Tailwind"],
    status: "Project",
  },
  {
    title: "News Portal",
    image: "/projects/news-portal.png",
    description:
      "A dynamic news portal website featuring article management, category organization, and an administrative dashboard. The platform allows administrators to publish and manage content efficiently while providing users with an organized reading experience.",
    tech: ["PHP", "MySQL", "JavaScript"],
    status: "Project",
  },
];

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
};

/* ============================================================
   HOME
============================================================ */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const fullName = "Fadlul Rahman Ramadhan";

  /* AOS init */
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  /* Generate stars hanya di client (fix hydration) */
  useEffect(() => {
    const generated: Star[] = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generated);
  }, []);

  /* Scroll progress + shrink nav + back to top */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((y / h) * 100);
      setScrolled(y > 40);
      setShowTop(y > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Typing effect */
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullName.length) {
        setTypedText(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 70);
    return () => clearInterval(timer);
  }, []);

  /* Parallax on hero */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* Cursor glow (desktop only) */
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = cursorRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="bg-[#07070f] text-white overflow-x-hidden relative selection:bg-purple-500/40">
      {/* ============================================================
          GLOBAL STYLES + ANIMATIONS
      ============================================================ */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background: #07070f; }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0a0a1a; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a855f7, #ec4899);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #c084fc, #f472b6);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -15px) rotate(8deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @keyframes shine {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        @keyframes ringRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          50% { box-shadow: 0 0 0 8px rgba(74, 222, 128, 0); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes modalSpring {
          0% { transform: scale(0.85) translateY(30px); opacity: 0; }
          60% { transform: scale(1.02) translateY(-4px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes modalFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-floatSlow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-glowPulse { animation: glowPulse 4s ease-in-out infinite; }
        .animate-ringRotate { animation: ringRotate 8s linear infinite; }
        .animate-badgePulse { animation: badgePulse 2s ease-in-out infinite; }

        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-120%) skewX(-20deg);
        }
        .btn-shine:hover::after {
          animation: shine 1s ease-out;
        }

        .text-gradient-animated {
          background: linear-gradient(90deg, #a855f7, #ec4899, #22d3ee, #a855f7);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s ease-in-out infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          filter: blur(8px);
          transition: opacity 0.9s ease, transform 0.9s ease, filter 0.9s ease;
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .star {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: twinkle 3s ease-in-out infinite;
        }

        .modal-backdrop { animation: modalFade 0.3s ease-out; }
        .modal-content { animation: modalSpring 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }

        .tilt-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* ============= SCROLL PROGRESS BAR ============= */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ============= CURSOR GLOW ============= */}
      <div
        ref={cursorRef}
        className="hidden md:block pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full z-[1] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.15) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ============= STARFIELD BACKGROUND ============= */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-glowPulse" />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[150px] animate-glowPulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-400/10 blur-[200px]" />

        {stars.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </div>

      {/* ============= NAVBAR ============= */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07070f]/80 backdrop-blur-xl border-b border-white/10 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 gap-3 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gradient-animated">
            Portofolio
          </h1>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/5 backdrop-blur-xl px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border border-white/10">
            {[
              { href: "#beranda", label: "Home" },
              { href: "#tentang", label: "About" },
              { href: "#skill", label: "Skills" },
              { href: "#proyek", label: "Projects" },
              { href: "#kontak", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-all duration-300 px-1"
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ============= HERO ============= */}
      <section
        id="beranda"
        ref={heroRef}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 px-4 sm:px-8 md:px-16 lg:px-24 pt-36 sm:pt-28 md:pt-24"
      >
        <div data-aos="fade-right" className="max-w-xl text-center md:text-left">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-full sm:w-fit max-w-full mb-8 mx-auto md:mx-0 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-shadow duration-500"
          >
            <img
              src="/foto-wisuda.jpg"
              alt="Avatar"
              className="w-12 h-12 rounded-lg object-cover transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] cursor-pointer"
            />
            <div>
              <p className="text-purple-400 text-xl leading-none">❝</p>
              <p className="text-gray-300 italic text-sm">
                "Code built with persistence, designed for performance."
              </p>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient-animated">
              {typedText}
              <span className="inline-block w-[2px] h-[1em] bg-purple-400 align-middle ml-1 animate-pulse" />
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4"
          >
            Interested in Web Development • Mobile Development • IT
          </p>

          <p data-aos="fade-up" data-aos-delay="500" className="text-purple-400 mb-6 sm:mb-8">
            Computer Systems Graduate — STMIK Jaya Nusa
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
          >
            <MagneticButton
              as="a"
              href="/cv-fadlul.pdf"
              download
              className="btn-shine bg-gradient-to-r from-purple-600 to-pink-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] inline-block"
            >
              Download CV
            </MagneticButton>

            <MagneticButton
              onClick={() =>
                document.getElementById("proyek")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white/5 backdrop-blur-xl border border-white/10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base hover:bg-white/10"
            >
              View Projects
            </MagneticButton>
          </div>
        </div>

        <div className="relative" data-aos="fade-left" data-aos-delay="300">
          <div className="absolute inset-0 rounded-[140px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 blur-2xl opacity-40 animate-glowPulse" />
          <div className="absolute -inset-3 rounded-[150px] border-2 border-dashed border-purple-500/40 animate-ringRotate" />

          <div className="hidden sm:flex absolute -top-4 -left-4 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-purple-500/30 items-center justify-center text-purple-400 animate-float shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <SiReact size={22} />
          </div>
          <div
            className="hidden sm:flex absolute top-1/4 -right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-pink-500/30 items-center justify-center text-pink-400 animate-floatSlow shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            style={{ animationDelay: "0.5s" }}
          >
            <FaLaravel size={22} />
          </div>
          <div
            className="hidden sm:flex absolute bottom-1/4 -left-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-cyan-500/30 items-center justify-center text-cyan-400 animate-float shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            style={{ animationDelay: "1s" }}
          >
            <SiMysql size={22} />
          </div>
          <div
            className="hidden sm:flex absolute -bottom-2 right-4 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-purple-500/30 items-center justify-center text-purple-400 animate-floatSlow shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            style={{ animationDelay: "1.5s" }}
          >
            <SiJavascript size={22} />
          </div>

          <img
            src="/foto-wisuda.jpg"
            alt="Foto Wisuda"
            className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-80 lg:w-[350px] lg:h-[500px] object-cover rounded-[120px] sm:rounded-[160px] lg:rounded-[180px] border-2 border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-105"
            style={{ transform: "translate(var(--mx, 0), var(--my, 0))" }}
          />
        </div>
      </section>

      {/* ============= ABOUT ============= */}
      <SectionReveal id="tentang">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gradient-animated relative inline-block mx-auto w-fit">
          More About Me
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
        </h2>

        <div className="max-w-4xl mx-auto mt-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 px-6 sm:px-8 md:px-10 py-6 shadow-[0_0_40px_rgba(168,85,247,0.05)] hover:shadow-[0_0_60px_rgba(168,85,247,0.2)] hover:border-purple-500/40 transition-all duration-500">
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
              <CounterStat value={10} suffix="+" label="Technical Skills" />
              <CounterStat value={7} suffix="+" label="Projects" />
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ============= SKILLS ============= */}
      <SectionReveal id="skill">
        <p className="text-purple-400 uppercase mb-2 text-sm sm:text-base tracking-widest">
          My Stack
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient-animated">
          Tools & Technologies I Use
        </h2>

        <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl">
          Kombinasi teknologi yang saya gunakan membantu menciptakan solusi
          digital yang scalable, modern, dan berfokus pada performa serta
          pengalaman pengguna.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <TiltCard key={index} delay={index * 80}>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4">
                <div className="text-purple-400 group-hover:text-pink-400 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{skill.role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </SectionReveal>

      {/* ============= PROJECTS ============= */}
      <SectionReveal id="proyek">
        <p className="text-purple-400 text-sm uppercase text-center mb-2 tracking-widest">
          Portofolio
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gradient-animated mb-4 sm:mb-6">
          My Projects
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base px-4">
          Berikut beberapa proyek yang telah saya kembangkan, mencakup website,
          aplikasi manajemen, aplikasi mobile, dan sistem berbasis teknologi
          modern.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
          {liveProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 100} />
          ))}
          {portfolioProjects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              delay={(i + 3) * 100}
              onDetail={() => setSelectedProject(p)}
            />
          ))}
        </div>

        {selectedProject && (
          <div
            className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-content relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f0f22] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(168,85,247,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white text-xl hover:bg-red-500/80 hover:rotate-90 transition-all duration-300"
              >
                ×
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 sm:h-72 object-cover"
              />

              <div className="p-6 sm:p-8">
                <p className="text-purple-400 text-sm uppercase mb-2 tracking-widest">
                  Project Detail
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((technology) => (
                    <span
                      key={technology}
                      className="border border-purple-500/30 bg-purple-500/5 px-3 py-1.5 rounded-full text-sm text-purple-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full border border-white/10 bg-white/5 text-gray-300 px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </SectionReveal>

      {/* ============= CONTACT ============= */}
      <SectionReveal id="kontak">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 uppercase mb-2 text-sm sm:text-base tracking-widest">
            Contact Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient-animated">
            Let's Build Something Great Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
            Saya terbuka untuk peluang kerja, kolaborasi proyek, maupun diskusi
            seputar teknologi dan pengembangan sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              { title: "Email", value: "rahmanfadlul229@gmail.com" },
              { title: "GitHub", value: "github.com/FadlulRahmanRamadhan" },
              { title: "Education", value: "S1 Sistem Komputer\nSTMIK Jaya Nusa" },
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-right"
                data-aos-delay={(index + 1) * 100}
                className="group relative bg-white/5 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base break-words whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300"
          >
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
                className="w-full p-3 sm:p-4 rounded-xl bg-white/5 outline-none border border-white/10 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base text-white placeholder:text-gray-500"
              />

              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-white/5 outline-none border border-white/10 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base text-white placeholder:text-gray-500"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-white/5 outline-none border border-white/10 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base text-white placeholder:text-gray-500 resize-none"
              />

              <button
                type="submit"
                className="btn-shine w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 sm:py-4 rounded-xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base font-medium shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </SectionReveal>

      {/* ============= FOOTER ============= */}
      <footer className="py-8 sm:py-10 border-t border-white/5 mt-12 sm:mt-20">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 text-gray-400">
          {[
            { href: "#beranda", label: "Home" },
            { href: "#tentang", label: "About" },
            { href: "#proyek", label: "Projects" },
            { href: "#kontak", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-purple-400 transition-all duration-300 text-sm sm:text-base"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl mb-6 sm:mb-8">
          {[
            {
              href: "https://github.com/FadlulRahmanRamadhan",
              icon: <FaGithub />,
              color: "hover:text-purple-400",
            },
            {
              href: "https://instagram.com/fadlulrahmannn",
              icon: <FaInstagram />,
              color: "hover:text-pink-400",
            },
            {
              href: "https://linkedin.com",
              icon: <FaLinkedin />,
              color: "hover:text-cyan-400",
            },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${s.color} hover:scale-125 hover:-translate-y-1 transition-all duration-300`}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm sm:text-base">
          © 2026 Fadlul Rahman Ramadhan — All Rights Reserved
        </p>

        <p className="text-center text-gray-600 mt-3 text-xs sm:text-sm">
          Built with <span className="text-purple-400 font-semibold">React JS</span> &{" "}
          <span className="text-pink-400 font-semibold">Tailwind CSS</span>
        </p>
      </footer>

      {/* ============= BACK TO TOP ============= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-[150] w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center justify-center text-white text-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </main>
  );
}

/* ============================================================
   MAGNETIC BUTTON
============================================================ */
function MagneticButton({
  children,
  className = "",
  as = "button",
  ...props
}: any) {
  const ref = useRef<any>(null);
  const Tag: any = as;

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    el.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0) scale(1)";
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`cursor-pointer transition-transform duration-200 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
   TILT CARD (3D)
============================================================ */
function TiltCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt-card group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] overflow-hidden"
    >
      {children}
    </div>
  );
}

/* ============================================================
   SECTION REVEAL WRAPPER
============================================================ */
function SectionReveal({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 reveal ${
        visible ? "in" : ""
      }`}
    >
      {children}
    </section>
  );
}

/* ============================================================
   COUNTER STAT
============================================================ */
function CounterStat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setCount(i);
            if (i >= value) clearInterval(timer);
          }, 120);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur-xl rounded-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 text-center border border-white/10 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-gradient-animated">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-400 mt-2 text-sm sm:text-base">{label}</p>
    </div>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */
function ProjectCard({
  project,
  delay,
  onDetail,
}: {
  project: ProjectType;
  delay: number;
  onDetail?: () => void;
}) {
  const isOnline = project.status === "Online";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all duration-500"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="relative h-52 overflow-hidden bg-black/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent opacity-70" />

        <span
          className={`absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full border backdrop-blur-md ${
            isOnline
              ? "border-green-500/50 bg-black/60 text-green-400 animate-badgePulse"
              : "border-purple-500/50 bg-black/60 text-purple-400"
          }`}
        >
          {isOnline ? "● Online" : "Project"}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-6 mb-5 text-sm flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-white/20 px-3 py-1 rounded-full text-xs text-gray-300 group-hover:border-purple-500/40 group-hover:text-purple-200 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 rounded-xl hover:-translate-y-0.5 transition-transform duration-300 text-sm font-medium"
          >
            {project.linkLabel}
          </a>
        ) : (
          <button
            onClick={onDetail}
            className="flex items-center justify-center w-full border border-purple-500/50 text-purple-400 px-4 py-3 rounded-xl hover:bg-purple-500/10 hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium"
          >
            🔍 Lihat Detail
          </button>
        )}
      </div>
    </div>
  );
}