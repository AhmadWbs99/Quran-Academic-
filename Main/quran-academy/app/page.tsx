'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [lang, setLang] = useState('ar');
  const [menuOpen, setMenuOpen] = useState(false);

  // النصوص كاملة من ملف HomePage.html الأصلي
  const t = {
    ar: {
      logo: "أكاديمية القرآن الكريم",
      home: "الرئيسية",
      about: "من نحن",
      programs: "البرامج",
      contact: "تواصل",
      login: "تسجيل الدخول",
      hero: "تعليم القرآن الكريم عن بُعد",
      desc: "منصة تعليمية رقمية متخصصة في تعليم القرآن الكريم",
      footer: "© 2025 أكاديمية القرآن"
    },
    en: {
      logo: "Quran Academy",
      home: "Home",
      about: "About Us",
      programs: "Programs",
      contact: "Contact",
      login: "Login",
      hero: "Online Quran Education",
      desc: "A professional digital Quran learning platform",
      footer: "© 2025 Quran Academy"
    }
  };

  const current = t[lang as keyof typeof t];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen">
      {/* Header */}
      <header className="header-style">
        <div id="logo">{current.logo}</div>
        
        <nav className={menuOpen ? 'show' : ''}>
          <Link href="/">{current.home}</Link>
          <a href="#about">{current.about}</a>
          <a href="#programs">{current.programs}</a>
          <a href="#contact">{current.contact}</a>
          <Link href="/login" className="login-btn">{current.login}</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
          ☰
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>{current.hero}</h1>
        <p>{current.desc}</p>
      </section>

      {/* زر تغيير اللغة العائم */}
      <button 
        className="lang-btn" 
        onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
      >
        {lang === 'ar' ? 'EN' : 'AR'}
      </button>

      <footer style={{ textAlign: 'center', padding: '20px', background: 'var(--primary)', color: '#fff' }}>
        {current.footer}
      </footer>
    </div>
  );
}