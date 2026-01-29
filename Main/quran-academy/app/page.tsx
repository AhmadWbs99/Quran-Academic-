"use client"; // ضروري جداً في Next.js لاستخدام الـ Hooks والـ localStorage

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // أضفنا Link للتنقل السريع دون تحديث الصفحة

// --- أنواع البيانات (Types) ---
type Lang = 'ar' | 'en';

interface Translation {
  logo: string; home: string; about: string; programs: string; contact: string;
  login: string; hero: string; desc: string; aboutTitle: string; aboutText: string;
  programsTitle: string; p1: string; p2: string; p3: string; details: string;
  contactTitle: string; send: string; footer: string;
  placeholders: { name: string; email: string; message: string; };
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
    aboutText: "منصة تعليمية متخصصة في إقراء القرآن الكريم للرجال والفتيان عبر الإنترنت، وتهدف إلى استقطاب أكبر عدد من المسلمين لتلاوة كتاب الله وحفظه وضبطه بالقراءات والتجويد.",
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
    logo: "Quran Academy", home: "Home", about: "About Us", programs: "Programs",
    contact: "Contact", login: "Login", hero: "Online Quran Education",
    desc: "A professional digital Quran learning platform",
    aboutTitle: "About Us", aboutText: "A specialized digital educational platform dedicated to teaching the recitation of the Holy Qur’an online.",
    programsTitle: "Our Programs", p1: "Large Group Classes", p2: "Small Group Classes",
    p3: "Individual Classes", details: "Details", contactTitle: "Contact Us",
    send: "Send", footer: "© 2025 Quran Academy",
    placeholders: { name: "Name", email: "Email", message: "Message" }
  }
};

const QuranAcademyHome: React.FC = () => {
  const [lang, setLang] = useState<Lang>("ar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // سنبدأ بـ false ثم نحولها لـ true بعد التحميل

  // 1. تحميل اللغة المحفوظة وحل مشكلة الـ Hydration
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang) setLang(savedLang);
    setIsLoaded(true); // الآن الصفحة جاهزة للعرض
  }, []);

  // 2. تحديث الخصائص عند تغيير اللغة
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = lang;
      document.body.dir = lang === "ar" ? "rtl" : "ltr";
      localStorage.setItem("lang", lang);
    }
  }, [lang, isLoaded]);

  if (!isLoaded) return null; // لا تعرض شيء حتى يتأكد المتصفح من الإعدادات

  const t = translations[lang];
  const toggleLang = () => setLang(prev => (prev === "ar" ? "en" : "ar"));

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>{t.home}</Link>
          <a href="#about" style={styles.navLink}>{t.about}</a>
          <a href="#programs" style={styles.navLink}>{t.programs}</a>
          <Link href="/login" style={styles.loginBtn}>{t.login}</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>{t.hero}</h1>
        <p style={styles.heroDesc}>{t.desc}</p>
      </section>

      {/* Programs Section - تم إصلاح منطق الأزرار هنا */}
      <section id="programs" style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>{t.programsTitle}</h2>
        <div style={styles.programsGrid}>
          {[
            { name: t.p1, path: "/Classes/groupclasses" },
            { name: t.p2, path: "/Classes/smallclasses" },
            { name: t.p3, path: "/Classes/individualclasses" }
          ].map((program, index) => (
            <div key={index} style={styles.programCard}>
              <h3 style={styles.programName}>{program.name}</h3>
              <Link href={program.path} style={styles.programBtn}>
                {t.details}
              </Link>
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

      <footer style={styles.footer}>{t.footer}</footer>

      <button 
        style={{ ...styles.floatingLangBtn, [lang === 'ar' ? 'left' : 'right']: '20px' }} 
        onClick={toggleLang}
      >{lang === "ar" ? "EN" : "AR"}</button>
    </div>
  );
};

// التنسيقات (محدثة لتناسب شاشات العرض)
const styles: Record<string, React.CSSProperties> = {
  wrapper: { fontFamily: 'Cairo, sans-serif', background: '#f8fafc', minHeight: '100vh' },
  header: { background: '#fff', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,.05)', position: 'sticky', top: 0, zIndex: 1000 },
  logo: { fontSize: '22px', fontWeight: 700, color: '#1e3a8a' },
  nav: { display: 'flex', gap: '20px', alignItems: 'center' },
  navLink: { textDecoration: 'none', fontWeight: 600, color: '#0f172a' },
  loginBtn: { background: '#fbbf24', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', color: '#000', fontWeight: 600 },
  hero: { background: '#1e3a8a', color: '#fff', textAlign: 'center', padding: '100px 20px' },
  heroTitle: { fontSize: '36px', marginBottom: '15px' },
  heroDesc: { fontSize: '18px', opacity: 0.9 },
  sectionAlt: { padding: '80px 20px', background: '#f1f5f9' },
  sectionTitle: { textAlign: 'center', fontSize: '32px', marginBottom: '40px' },
  programsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1100px', margin: 'auto' },
  programCard: { background: '#fff', padding: '30px', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,.08)', textAlign: 'center' },
  programName: { marginBottom: '20px', fontWeight: 700, minHeight: '50px' },
  programBtn: { display: 'inline-block', padding: '12px 30px', background: '#fbbf24', color: '#000', textDecoration: 'none', borderRadius: '30px', fontWeight: 600 },
  section: { padding: '80px 20px' },
  contactForm: { maxWidth: '450px', margin: 'auto', background: '#fff', padding: '35px', borderRadius: '18px', display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: '0 10px 25px rgba(0,0,0,.05)' },
  input: { padding: '14px', borderRadius: '10px', border: '1px solid #e5e7eb' },
  textarea: { padding: '14px', borderRadius: '10px', border: '1px solid #e5e7eb', minHeight: '100px' },
  sendBtn: { background: '#fbbf24', border: 'none', padding: '14px', borderRadius: '30px', fontWeight: 600, cursor: 'pointer' },
  footer: { background: '#1e3a8a', color: '#fff', textAlign: 'center', padding: '20px' },
  floatingLangBtn: { position: 'fixed', bottom: '20px', width: '50px', height: '50px', borderRadius: '50%', background: '#1e3a8a', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', zIndex: 1001 }
};

export default QuranAcademyHome;