import React, { useState, useEffect } from 'react';

// --- التعريفات (Types) ---
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
    title: "الحلقات الجماعية الكبرى",
    intro: "الحلقات الجماعية الكبرى مخصصة للتعليم الجماعي المنظم بعدد كبير من الطلاب، وتهدف إلى تحسين التلاوة وتعليم أساسيات التجويد في بيئة تعليمية منضبطة.",
    featuresTitle: "مميزات الحلقة",
    features: [
      "عدد طلاب كبير",
      "تنظيم جماعي واضح",
      "تصحيح عام للتلاوة",
      "مناسبة للمبتدئين"
    ],
    suitableTitle: "مناسبة لـ",
    suitable: [
      "المبتدئين",
      "تعلم أساسيات التلاوة",
      "الالتحاق بالحلقات لأول مرة",
      "الانتقال لاحقًا لمستويات أعلى"
    ],
    detailsTitle: "تفاصيل الحلقة",
    details: [
      "عدد الطلاب: 10 – 20 طالب",
      "الفئة: الرجال والفتيان",
      "مدة الحصة : ساعتان ",
      "المنهج: أساسيات التلاوة والتجويد",
      "المستوى: مبتدئ",
      "المنصة: Zoom ",
      "الأسعار: الاشتراك كامل 50 دولار، الجزئي 25 دولار"
    ],
    register: "اشترك الآن",
    home: "الرئيسية",
    programs: "البرامج",
    contact: "تواصل",
    footer: "© 2025 أكاديمية القرآن – جميع الحقوق محفوظة"
  },
  en: {
    logo: "Quran Academy",
    title: "Large Group Classes",
    intro: "Large group classes are designed for structured learning with a larger number of students, focusing on improving recitation and teaching basic Tajweed in an organized environment.",
    featuresTitle: "Class Features",
    features: [
      "Large number of students",
      "Well-organized group learning",
      "General recitation correction",
      "Ideal for beginners"
    ],
    suitableTitle: "Suitable For",
    suitable: [
      "Beginners",
      "Learning basic recitation",
      "First-time enrollment",
      "Progressing to higher levels later"
    ],
    detailsTitle: "Class Details",
    details: [
      "Students: 10 – 20",
      "Category: Men & Boys",
      "Duration: 2 hours",
      "Curriculum: Basic Recitation & Tajweed",
      "Level: Beginner",
      "Platform: Zoom ",
      "Price: Full subscription $50, Partial subscription $25"
    ],
    register: "Subscribe Now",
    home: "Home",
    programs: "Programs",
    contact: "Contact",
    footer: "© 2025 Quran Academy – All Rights Reserved"
  }
};

const LargeGroupClasses: React.FC = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const t = translations[lang];

  // مزامنة اتجاه الصفحة واللغة مع حالة التطبيق
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;
  }, [lang, t.title]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const goToPayment = (e: React.MouseEvent) => {
    e.preventDefault();
    const program = "الحلقات الجماعية الكبرى";
    const price = 50; // السعر المحدد لهذه الصفحة
    window.location.href = `payment.html?program=${encodeURIComponent(program)}&price=${price}`;
  };

  return (
    <div style={styles.container}>
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
          {/* Card 1: Features */}
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>{t.featuresTitle}</h3>
            <ul style={styles.list}>
              {t.features.map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.checkIcon}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Suitable For */}
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

        {/* Info Section */}
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

        {/* Call to Action */}
        <div style={styles.ctaArea}>
          <a href="#" onClick={goToPayment} style={styles.registerBtn}>
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

// --- الستايلات (CSS-in-JS) ---
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
  },
  infoBox: {
    backgroundColor: '#f1f5f9',
    padding: '20px',
    borderRadius: '15px',
    fontSize: '15px',
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

export default LargeGroupClasses; 