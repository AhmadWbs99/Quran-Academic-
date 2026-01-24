"use client"; // ضروري جداً في Next.js لاستخدام الـ Hooks والـ localStorage

import React, { useState, useEffect } from 'react';

// --- أنواع البيانات (Types) ---
type Lang = 'ar' | 'en';

interface Translation {
  logo: string;
  home: string;
  about: string;
  programs: string;
  contact: string;
  login: string;
  hero: string;
  desc: string;
  aboutTitle: string;
  aboutText: string;
  programsTitle: string;
  p1: string;
  p2: string;
  p3: string;
  details: string;
  contactTitle: string;
  send: string;
  footer: string;
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
}

const translations: Record<Lang, Translation> = {
  ar: {
    logo: "أكاديمية القرآن الكريم",
    home: "الرئيسية",
    about: "من نحن",
    programs: "البرامج",
    contact: "تواصل",
    login: "تسجيل الدخول",
    hero: "تعليم القرآن الكريم عن بُعد",
    desc: "منصة تعليمية رقمية متخصصة في تعليم القرآن الكريم",
    aboutTitle: "من نحن",
    aboutText: "منصة تعليمية متخصصة في إقراء القرآن الكريم للرجال والفتيان عبر الإنترنت، وتهدف إلى استقطاب أكبر عدد من المسلمين لتلاوة كتاب الله وحفظه وضبطه بالقراءات والتجويد، مع توفير بيئة تعليمية منظمة تراعي خصوصية الشعائر.",
    programsTitle: "الحلقات",
    p1: "الحلقات الجماعية الكبرى",
    p2: "الحلقات الجماعية الصغرى",
    p3: "الحلقات الفردية",
    details: "عرض التفاصيل",
    contactTitle: "تواصل معنا",
    send: "إرسال",
    footer: "© 2025 أكاديمية القرآن",
    placeholders: { name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة" }
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
    aboutTitle: "About Us",
    aboutText: "A specialized digital educational platform dedicated to teaching the recitation of the Holy Qur’an online. It aims to attract the largest possible number of Muslims to recite, memorize, and master the Book of Allah according to proper Tajweed rules, while providing a well-structured learning environment.",
    programsTitle: "Our Programs",
    p1: "Large Group Classes",
    p2: "Small Group Classes",
    p3: "Individual Classes",
    details: "Details",
    contactTitle: "Contact Us",
    send: "Send",
    footer: "© 2025 Quran Academy",
    placeholders: { name: "Name", email: "Email", message: "Message" }
  }
};

const QuranAcademyHome: React.FC = () => {
  // نبدأ بلغة افتراضية لتجنب تعارض السيرفر مع المتصفح
  const [lang, setLang] = useState<Lang>("ar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const t = translations[lang];

  // تحميل اللغة المحفوظة عند فتح الصفحة لأول مرة
useEffect(() => {
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}, [lang]);

  // تحديث الـ DOM عند تغيير اللغة
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = lang;
      document.body.dir = lang === "ar" ? "rtl" : "ltr";
      localStorage.setItem("lang", lang);
    }
  }, [lang, isLoaded]);

  const toggleLang = () => setLang(prev => (prev === "ar" ? "en" : "ar"));
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // منع ظهور محتوى خاطئ قبل تحميل اللغة من الـ localStorage
  if (!isLoaded) return null;

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <div style={styles.menuBtn} onClick={toggleMenu}>☰</div>
        <nav style={{ ...styles.nav, ...(isMenuOpen ? styles.navShow : {}) }}>
          <a href="#" style={styles.navLink}>{t.home}</a>
          <a href="#about" style={styles.navLink}>{t.about}</a>
          <a href="#programs" style={styles.navLink}>{t.programs}</a>
          <a href="#contact" style={styles.navLink}>{t.contact}</a>
          <a href="/login" style={styles.loginBtn}>{t.login}</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>{t.hero}</h1>
        <p style={styles.heroDesc}>{t.desc}</p>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>{t.aboutTitle}</h2>
        <p style={styles.aboutText}>{t.aboutText}</p>
      </section>

      {/* Programs Section */}
      <section id="programs" style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>{t.programsTitle}</h2>
        <div style={styles.programsGrid}>
          {[t.p1, t.p2, t.p3].map((program, index) => (
            <div key={index} style={styles.programCard}>
              <h3 style={styles.programName}>{program}</h3>
              <a href={"#groupclasses/page.tsx"} style={styles.programBtn}>{t.p1}</a>
              <a href={"#individual/page.tsx"} style={styles.programBtn}>{t.p2}</a>
              <a href={"#smallclasses/page.tsx"} style={styles.programBtn}>{t.p3}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>{t.contactTitle}</h2>
        <form style={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <input style={styles.input} placeholder={t.placeholders.name} />
          <input style={styles.input} placeholder={t.placeholders.email} />
          <textarea style={styles.textarea} placeholder={t.placeholders.message}></textarea>
          <button style={styles.sendBtn}>{t.send}</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>{t.footer}</footer>

      {/* Floating Lang Button */}
      <button 
        style={{ 
          ...styles.floatingLangBtn, 
          [lang === 'ar' ? 'left' : 'right']: '20px' 
        }} 
        onClick={toggleLang}
      >
        {lang === "ar" ? "EN" : "AR"}
      </button>
    </div>
  );
};

// --- التنسيقات (Inline Styles) ---
const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    fontFamily: 'Cairo, Poppins, sans-serif',
    background: '#f8fafc',
    color: '#0f172a',
    minHeight: '100vh',
  },
  header: {
    background: '#fff',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
    padding: '15px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: { fontSize: '22px', fontWeight: 700, color: '#1e3a8a' },
  nav: { display: 'flex', gap: '20px', alignItems: 'center' },
  navLink: { textDecoration: 'none', fontWeight: 600, color: '#0f172a' },
  loginBtn: {
    background: '#fbbf24',
    padding: '8px 18px',
    borderRadius: '20px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 600,
  },
  menuBtn: { fontSize: '26px', cursor: 'pointer', display: 'none' },
  hero: {
    background: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8))',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    textAlign: 'center',
    padding: '90px 20px',
  },
  heroTitle: { fontSize: '36px', marginBottom: '15px' },
  heroDesc: { fontSize: '18px' },
  section: { padding: '80px 20px' },
  sectionAlt: { padding: '80px 20px', background: '#f1f5f9' },
  sectionTitle: { textAlign: 'center', fontSize: '32px', marginBottom: '40px' },
  aboutText: { maxWidth: '900px', margin: 'auto', textAlign: 'center', lineHeight: '1.8' },
  programsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '25px',
    maxWidth: '1100px',
    margin: 'auto',
  },
  programCard: {
    background: '#fff',
    padding: '30px',
    borderRadius: '18px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
    textAlign: 'center',
  },
  programName: { marginBottom: '15px' },
  programBtn: {
    display: 'inline-block',
    padding: '12px 30px',
    background: '#fbbf24',
    color: '#000',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 600,
  },
  contactForm: {
    maxWidth: '450px',
    margin: 'auto',
    background: '#fff',
    padding: '35px',
    borderRadius: '18px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: { padding: '14px', borderRadius: '10px', border: '1px solid #e5e7eb' },
  textarea: { padding: '14px', borderRadius: '10px', border: '1px solid #e5e7eb', minHeight: '100px' },
  sendBtn: { background: '#fbbf24', border: 'none', padding: '14px', borderRadius: '30px', fontWeight: 600, cursor: 'pointer' },
  footer: { background: '#1e3a8a', color: '#fff', textAlign: 'center', padding: '20px' },
  floatingLangBtn: {
    position: 'fixed',
    bottom: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#1e3a8a',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 1001,
  },
};

export default QuranAcademyHome;