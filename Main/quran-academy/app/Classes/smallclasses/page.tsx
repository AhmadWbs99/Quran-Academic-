"use client";

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Lang = 'ar' | 'en';

const translations = {
  ar: {
    logo: "أكاديمية القرآن",
    title: "الحلقات الجماعية الصغرى",
    intro: "الحلقات الجماعية الصغرى مخصصة للطلاب الذين يحتاجون إلى متابعة أدق وتفاعل أكبر مع المعلم ضمن مجموعات صغيرة.",
    featuresTitle: "مميزات الحلقة",
    features: ["عدد طلاب محدود", "تصحيح فردي", "متابعة مستمرة", "تفاعل مباشر"],
    suitableTitle: "مناسبة لـ",
    suitable: ["الحفظ", "المراجعة", "تقوية التجويد", "رفع المستوى"],
    detailsTitle: "تفاصيل الحلقة",
    details: ["عدد الطلاب: 5 طلاب", "الفئة: رجال وفتيان", "المدة: ساعة ونصف", "المنهج: تجويد ومصحف", "المستوى: مبتدئ-متوسط", "المنصة: Zoom"],
    register: "اشترك الآن",
    home: "الرئيسية",
    programs: "البرامج",
    contact: "تواصل",
    footer: "© 2025 أكاديمية القرآن – جميع الحقوق محفوظة"
  },
  en: {
    logo: "Quran Academy",
    title: "Small Group Classes",
    intro: "Designed for students who need closer supervision and greater interaction in small groups.",
    featuresTitle: "Class Features",
    features: ["Limited students", "Individual correction", "Continuous follow-up", "Direct interaction"],
    suitableTitle: "Suitable For",
    suitable: ["Memorization", "Revision", "Tajweed improvement", "Level advancement"],
    detailsTitle: "Class Details",
    details: ["Students: 5 students", "Category: Men & Boys", "Duration: 1.5 hours", "Curriculum: Tajweed", "Level: Beginner", "Platform: Zoom"],
    register: "Subscribe Now",
    home: "Home",
    programs: "Programs",
    contact: "Contact",
    footer: "© 2025 Quran Academy – All Rights Reserved"
  }
};

export default function SmallGroupClasses() {
  const [lang, setLang] = useState<Lang>('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang) setLang(savedLang);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang, isLoaded]);

  if (!isLoaded) return null;
  const t = translations[lang];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>{t.home}</Link>
          <Link href="/#programs" style={styles.navLink}>{t.programs}</Link>
          <Link href="/#contact" style={styles.navLink}>{t.contact}</Link>
        </nav>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} style={styles.langBtn}>{lang === 'ar' ? 'EN' : 'AR'}</button>
      </header>

      <main style={styles.section}>
        <h1 style={styles.pageTitle}>{t.title}</h1>
        <div style={styles.intro}>{t.intro}</div>

        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.featuresTitle}</h3>
            <ul style={styles.list}>
              {t.features.map((item, idx) => (
                <li key={idx} style={styles.listItem}><span style={styles.checkMark}>✓</span> {item}</li>
              ))}
            </ul>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.suitableTitle}</h3>
            <ul style={styles.list}>
              {t.suitable.map((item, idx) => (
                <li key={idx} style={styles.listItem}><span style={styles.checkMark}>✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={styles.infoSection}>
          <h2 style={styles.cardHeader}>{t.detailsTitle}</h2>
          <div style={styles.infoGrid}>
            {t.details.map((detail, idx) => (<div key={idx} style={styles.infoBox}>{detail}</div>))}
          </div>
        </div>

        <div style={styles.cta}>
          <Link href={{ pathname: '/payment', query: { program: t.title, price: '50' } }} style={styles.ctaBtn}>{t.register}</Link>
        </div>
      </main>
      <footer style={styles.footer}>{t.footer}</footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { backgroundColor: '#fff', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '22px', fontWeight: 700, color: '#1e3a8a' },
  nav: { display: 'flex', gap: '15px' },
  navLink: { textDecoration: 'none', color: '#0f172a', fontWeight: 600 },
  langBtn: { backgroundColor: '#fbbf24', border: 'none', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' },
  section: { maxWidth: '1100px', margin: '60px auto', padding: '0 20px' },
  pageTitle: { textAlign: 'center', color: '#1e3a8a', fontSize: '32px', marginBottom: '20px' },
  intro: { backgroundColor: '#fff', padding: '35px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', textAlign: 'center', fontSize: '18px', lineHeight: 2 },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '50px' },
  card: { backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' },
  cardHeader: { color: '#1e3a8a', marginBottom: '15px' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' },
  checkMark: { color: '#fbbf24', fontWeight: 'bold' },
  infoSection: { marginTop: '60px', backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' },
  infoBox: { backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '15px', fontSize: '16px' },
  cta: { textAlign: 'center', margin: '70px 0' },
  ctaBtn: { backgroundColor: '#fbbf24', padding: '15px 40px', borderRadius: '40px', textDecoration: 'none', fontWeight: 'bold', color: '#000', display: 'inline-block' },
  footer: { backgroundColor: '#1e3a8a', color: '#fff', padding: '25px', textAlign: 'center' }
};