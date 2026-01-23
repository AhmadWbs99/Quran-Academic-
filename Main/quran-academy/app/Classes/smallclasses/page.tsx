import React, { useState, useEffect } from 'react';

// 1. تعريف أنواع البيانات (Types)
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
    details: [
      "عدد الطلاب: 5 طلاب",
      "الفئة: الرجال والفتيان",
      "مدة الحصة: ساعة ونصف",
      "المنهج: التجويد والمصحف",
      "المستوى: مبتدئ – متوسط",
      "المنصة: Zoom"
    ],
    register: "اشترك الآن",
    home: "الرئيسية",
    programs: "البرامج",
    contact: "تواصل",
    footer: "© 2025 أكاديمية القرآن – جميع الحقوق محفوظة"
  },
  en: {
    logo: "Quran Academy",
    title: "Small Group Classes",
    intro: "Small group classes are designed for students who need closer supervision and greater interaction with the teacher.",
    featuresTitle: "Class Features",
    features: ["Limited number of students", "Individual correction", "Continuous follow-up", "Direct interaction"],
    suitableTitle: "Suitable For",
    suitable: ["Memorization", "Revision", "Tajweed improvement", "Level advancement"],
    detailsTitle: "Class Details",
    details: [
      "Students: 5 students",
      "Category: Men & Boys",
      "Duration: 1 hour and 30 minutes",
      "Curriculum: Tajweed & Mushaf",
      "Level: Beginner – Intermediate",
      "Platform: Zoom"
    ],
    register: "Subscribe Now",
    home: "Home",
    programs: "Programs",
    contact: "Contact",
    footer: "© 2025 Quran Academy – All Rights Reserved"
  }
};

const SmallGroupClasses: React.FC = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const t = translations[lang];

  // تحديث اتجاه الصفحة (RTL/LTR) عند تغيير اللغة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const goToPayment = (e: React.MouseEvent) => {
    e.preventDefault();
    const program = "الحلقات الجماعية الصغرى";
    const price = 60;
    window.location.href = `payment.html?program=${encodeURIComponent(program)}&price=${price}`;
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>{t.home}</a>
          <a href="#programs" style={styles.navLink}>{t.programs}</a>
          <a href="#contact" style={styles.navLink}>{t.contact}</a>
        </nav>
        <button onClick={toggleLang} style={styles.langBtn}>
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>
      </header>

      {/* Main Content */}
      <main style={styles.section}>
        <h1 style={styles.pageTitle}>{t.title}</h1>
        <div style={styles.intro}>{t.intro}</div>

        <div style={styles.cardsGrid}>
          {/* Card: Features */}
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.featuresTitle}</h3>
            <ul style={styles.list}>
              {t.features.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.checkMark}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card: Suitable For */}
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.suitableTitle}</h3>
            <ul style={styles.list}>
              {t.suitable.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.checkMark}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info Grid */}
        <div style={styles.infoSection}>
          <h2 style={styles.cardHeader}>{t.detailsTitle}</h2>
          <div style={styles.infoGrid}>
            {t.details.map((detail, idx) => (
              <div key={idx} style={styles.infoBox}>
                {detail}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={styles.cta}>
          <a href="#" onClick={goToPayment} style={styles.ctaBtn}>
            {t.register}
          </a>
        </div>
      </main>

      <footer style={styles.footer}>{t.footer}</footer>
    </div>
  );
};

// 2. كائن الستايلات (Styles Object) - تم تصحيحه
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Cairo, sans-serif',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  },
  logo: { fontSize: '22px', fontWeight: 700, color: '#1e3a8a' },
  nav: { display: 'flex', gap: '15px' },
  navLink: { textDecoration: 'none', color: '#0f172a', fontWeight: 600 },
  langBtn: {
    backgroundColor: '#fbbf24',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  section: { maxWidth: '1100px', margin: '60px auto', padding: '0 20px' },
  pageTitle: { textAlign: 'center', color: '#1e3a8a' },
  intro: {
    backgroundColor: '#fff',
    padding: '35px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    textAlign: 'center',
    fontSize: '18px',
    lineHeight: 2,
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '50px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  },
  cardHeader: { color: '#1e3a8a', marginBottom: '15px' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' },
  checkMark: { color: '#fbbf24', fontWeight: 'bold' },
  infoSection: {
    marginTop: '60px',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  infoBox: {
    backgroundColor: '#f1f5f9',
    padding: '20px',
    borderRadius: '15px',
    fontSize: '16px'
  },
  cta: { textAlign: 'center', margin: '70px 0' },
  ctaBtn: {
    backgroundColor: '#fbbf24',
    padding: '15px 40px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#000',
    display: 'inline-block'
  },
  footer: {
    backgroundColor: '#1e3a8a',
    color: '#fff',
    padding: '25px',
    textAlign: 'center'
  }
};

export default SmallGroupClasses;