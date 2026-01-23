import React, { useState, useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
type Lang = 'ar' | 'en';

interface TranslationData {
  logo: string;
  title: string;
  intro: string;
  featuresTitle: string;
  features: string[];
  suitableTitle: string;
  suitable: string[];
  detailsTitle: string;
  details: string[];
  register: string;
  home: string;
  programs: string;
  contact: string;
  footer: string;
}

const translations: Record<Lang, TranslationData> = {
  ar: {
    logo: "أكاديمية القرآن",
    title: "الحلقات الفردية",
    intro: "الحلقات الفردية توفر تعليماً مخصصاً لطالب واحد مع المعلم، مع تركيز كامل على مستوى الطالب وأهدافه في الحفظ والتلاوة والتجويد.",
    featuresTitle: "مميزات الحلقة",
    features: [
      "تعليم فردي مخصص",
      "تركيز كامل على الطالب",
      "مرونة في الوقت",
      "تقدم أسرع"
    ],
    suitableTitle: "مناسبة لـ",
    suitable: [
      "من يرغب بتعليم خاص",
      "تقوية التلاوة",
      "الحفظ المكثف",
      "تصحيح الأخطاء بدقة"
    ],
    detailsTitle: "تفاصيل الحلقة",
    details: [
      "عدد الطلاب: طالب واحد",
      "الفئة: الرجال والفتيان",
      "مدة الحصة: 30 – 60 دقيقة",
      "المنهج: حسب مستوى الطالب",
      "المستوى: جميع المستويات",
      "المنصة: Zoom",
      "الأسعار: الاشتراك كامل 60 دولار، الاشتراك الجزئي 30 دولار"
    ],
    register: "اشترك الآن",
    home: "الرئيسية",
    programs: "البرامج",
    contact: "تواصل",
    footer: "© 2025 أكاديمية القرآن – جميع الحقوق محفوظة"
  },
  en: {
    logo: "Quran Academy",
    title: "One-on-One Classes",
    intro: "One-on-one classes provide personalized learning with full focus on a single student, tailored to their level and goals in memorization, recitation, and Tajweed.",
    featuresTitle: "Class Features",
    features: [
      "Personalized instruction",
      "Full focus on the student",
      "Flexible scheduling",
      "Faster progress"
    ],
    suitableTitle: "Suitable For",
    suitable: [
      "Students seeking private lessons",
      "Improving recitation",
      "Intensive memorization",
      "Precise error correction"
    ],
    detailsTitle: "Class Details",
    details: [
      "Students: One student",
      "Category: Men & Boys",
      "Duration: 30 – 60 minutes",
      "Curriculum: Based on student level",
      "Level: All levels",
      "Platform: Zoom ",
      "Price: Full subscription $60, Partial subscription $30"
    ],
    register: "Subscribe Now",
    home: "Home",
    programs: "Programs",
    contact: "Contact",
    footer: "© 2025 Quran Academy – All Rights Reserved"
  }
};

const PrivateClasses: React.FC = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const t = translations[lang];

  // التحكم في اتجاه الصفحة وعنوانها
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;
  }, [lang, t.title]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const program = "الحلقات الفردية";
    const price = 60; // السعر الأساسي
    // توجيه لصفحة الدفع أو التسجيل
    window.location.href = `payment.html?program=${encodeURIComponent(program)}&price=${price}`;
  };

  return (
    <div style={styles.container}>
      {/* الخطوط وتصفير الحواف */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body { margin: 0; padding: 0; }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <nav style={styles.nav}>
          <a href="HomePage.html" style={styles.navLink}>{t.home}</a>
          <a href="HomePage.html#programs" style={styles.navLink}>{t.programs}</a>
          <a href="HomePage.html#contact" style={styles.navLink}>{t.contact}</a>
        </nav>
        <button onClick={toggleLang} style={styles.langBtn}>
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>
      </header>

      {/* Main Section */}
      <main style={styles.section}>
        <h1 style={styles.mainTitle}>{t.title}</h1>

        <div style={styles.introBox}>{t.intro}</div>

        <div style={styles.cardsGrid}>
          {/* Card: المميزات */}
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.featuresTitle}</h3>
            <ul style={styles.list}>
              {t.features.map((feature, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.checkIcon}>✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Card: الفئة المستهدفة */}
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.suitableTitle}</h3>
            <ul style={styles.list}>
              {t.suitable.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.checkIcon}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Details Grid */}
        <div style={styles.infoWrapper}>
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
        <div style={styles.ctaArea}>
          <a href="#" onClick={handleRegister} style={styles.registerBtn}>
            {t.register}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        {t.footer}
      </footer>
    </div>
  );
};

// --- الستايلات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'Cairo, sans-serif',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1e3a8a',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#0f172a',
    fontWeight: 600,
  },
  langBtn: {
    backgroundColor: '#fbbf24',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  section: {
    maxWidth: '1100px',
    margin: '60px auto',
    padding: '0 20px',
    flex: 1,
  },
  mainTitle: {
    textAlign: 'center',
    color: '#1e3a8a',
    marginBottom: '30px',
  },
  introBox: {
    backgroundColor: '#ffffff',
    padding: '35px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
    textAlign: 'center',
    lineHeight: 2,
    fontSize: '18px',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '50px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
  },
  cardHeader: {
    color: '#1e3a8a',
    marginTop: 0,
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
    lineHeight: 1.6,
  },
  checkIcon: {
    color: '#fbbf24',
    fontWeight: 'bold',
  },
  infoWrapper: {
    marginTop: '60px',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
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
    fontSize: '16px',
  },
  ctaArea: {
    textAlign: 'center',
    margin: '70px 0',
  },
  registerBtn: {
    backgroundColor: '#fbbf24',
    padding: '15px 40px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#000',
    display: 'inline-block',
  },
  footer: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    textAlign: 'center',
    padding: '25px',
    marginTop: 'auto',
  },
};

export default PrivateClasses;