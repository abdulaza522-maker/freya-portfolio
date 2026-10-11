'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const images = [
  { src: "/images/img1.jpg", alt: "Portrait by doorway", title: "Doorway", desc: "Urban Series" },
  { src: "/images/img2.jpg", alt: "Woman with collectible toy", title: "Collectible", desc: "Indoor Moment" },
  { src: "/images/img3.jpg", alt: "Woman in traditional hanbok", title: "Hanbok", desc: "Traditional" },
  { src: "/images/img4.jpg", alt: "Woman making heart gesture", title: "Heart", desc: "Outdoor Field" },
  { src: "/images/img5.jpg", alt: "Woman by stone wall with painting", title: "Portrait", desc: "Reflection" },
  { src: "/images/img6.jpg", alt: "Close-up in hanbok", title: "Close-up", desc: "Detail Study" },
  { src: "/images/img7.jpg", alt: "Woman in black shirt", title: "Chaos", desc: "Studio" },
  { src: "/images/img8.jpg", alt: "Portrait session", title: "Session", desc: "Portrait" },
  { src: "/images/img9.jpg", alt: "Additional portrait", title: "Moment", desc: "Candid" },
];

export default function Home() {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <title>Portfolio | Cinematic Motion</title>
        <meta name="description" content="Cinematic portfolio with motion design" />
      </head>
      <body className="min-h-full flex flex-col">
        <ParticleBackground />
        <CustomCursor />
        
        {/* Hero Section */}
        <section className="hero section">
          <div className="hero-content container">
            <ScrollReveal delay={100}>
              <p className="hero-subtitle">Cinematic Portfolio</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h1 className="hero-title">Visual<br />Stories</h1>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="cutout-portrait">
                <Image
                  src="/images/img1.jpg"
                  alt="Hero portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 500px"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <p className="hero-subtitle" style={{ marginBottom: 0 }}>
                Scroll to explore
              </p>
            </ScrollReveal>
            <div className="scroll-indicator" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section" id="gallery">
          <div className="container">
            <ScrollReveal delay={100}>
              <h2 className="section-title">Gallery</h2>
            </ScrollReveal>
            <div className="gallery-grid">
              {images.map((img, index) => (
                <ScrollReveal key={img.src} delay={150 + index * 80} className="reveal-delay-1">
                  <article className="gallery-item">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 300px"
                      className="object-cover"
                    />
                    <div className="gallery-item-caption">
                      <h3>{img.title}</h3>
                      <p>{img.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <div className="container">
            <ScrollReveal delay={100}>
              <h2 className="section-title">About</h2>
            </ScrollReveal>
            <ScrollReveal delay={200} className="about-content">
              <p className="about-text">
                <strong>Visual storytelling</strong> through the lens of motion and emotion. 
                Each frame captures a moment suspended in time — where light, composition, 
                and human expression converge to create narratives that linger.
              </p>
              <p className="about-text">
                This portfolio explores the intersection of <strong>portrait photography</strong> 
                and <strong>motion design</strong>, blending cinematic aesthetics with 
                interactive web experiences. Built with Next.js, GSAP, and custom particle systems.
              </p>
              <p className="about-text" style={{ marginBottom: 0 }}>
                Crafted with intention. Every transition, every particle, every reveal — 
                designed to serve the story, not distract from it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer section">
          <div className="container">
            <div className="footer-links">
              <a href="#gallery">Gallery</a>
              <a href="#about">About</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:hello@example.com">Contact</a>
            </div>
            <p className="footer-copyright">© 2025 Cinematic Portfolio. Built with Next.js & GSAP.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
