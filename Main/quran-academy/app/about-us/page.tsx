import React from 'react';
// استيراد Link الخاص بـ Next.js بدلاً من react-router-dom
import Link from 'next/link';

// تعريف "الأنواع" لضمان عدم ظهور أخطاء في التيرمينال
interface AboutProps {
  t: {
    aboutTitle?: string;
    aboutSubTitle?: string;
    missionTitle?: string;
    missionDesc?: string;
    visionTitle?: string;
    visionDesc?: string;
    whyUsTitle?: string;
    startJourney?: string;
    joinNow?: string;
  };
}

const About = ({ t }: AboutProps) => {
  return (
    <div style={styles.wrapper}>
      {/* قسم العنوان الرئيسي - Hero */}
      <section style={styles.aboutHero}>
        <h1 style={styles.heroTitle}>{t.aboutTitle || "عن الأكاديمية"}</h1>
        <p style={styles.heroDesc}>
          {t.aboutSubTitle || "نسعى لتكون رحلتك مع القرآن الكريم ميسرة وممتعة بأحدث التقنيات."}
        </p>
      </section>

      {/* قسم الرسالة والرؤية - Mission & Vision */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.iconText}>🎯</div>
            <h3 style={styles.cardTitle}>{t.missionTitle || "رسالتنا"}</h3>
            <p style={styles.cardText}>
              {t.missionDesc || "توفير بيئة تعليمية قرآنية متميزة تجمع بين أصالة التلقي ومرونة التكنولوجيا المعاصرة."}
            </p>
          </div>
          
          <div style={styles.card}>
            <div style={styles.iconText}>👁️</div>
            <h3 style={styles.cardTitle}>{t.visionTitle || "رؤيتنا"}</h3>
            <p style={styles.cardText}>
              {t.visionDesc || "أن نصبح المنصة العالمية الأولى في تعليم القرآن الكريم والقراءات عبر الإنترنت."}
            </p>
          </div>
        </div>
      </section>

      {/* قسم المميزات - Why Us */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>{t.whyUsTitle || "لماذا تختار أكاديميتنا؟"}</h2>
        <div style={styles.featuresList}>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✓</span>
            <p><strong>معلمون مجازون:</strong> جميع معلمينا يحملون إجازات متصلة السند بالرسول ﷺ.</p>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✓</span>
            <p><strong>تقنيات متقدمة:</strong> ربط مباشر عبر Zoom Video SDK لضمان أعلى جودة صوت وصورة.</p>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✓</span>
            <p><strong>مرونة في المواعيد:</strong> فصول دراسية على مدار الساعة تناسب جميع الدول.</p>
          </div>
        </div>
      </section>

      {/* قسم الانضمام - Call to Action */}
      <section style={styles.section}>
        <div style={styles.ctaCard}>
          <h2 style={{ marginBottom: '15px' }}>{t.startJourney || "ابدأ رحلتك القرآنية اليوم"}</h2>
          {/* في Next.js، نضع الستايل داخل Link أو داخل <a> داخله */}
          <Link href="/Classes/groupclasses" style={styles.programBtn}>
            {t.joinNow || "انضم إلينا الآن"}
          </Link>
        </div>
      </section>
    </div>
  );
};

// التنسيقات البرمجية (Styles Object)
const styles: Record<string, React.CSSProperties> = {
  wrapper: { 
    fontFamily: 'Cairo, sans-serif', 
    background: '#f8fafc', 
    minHeight: '100vh', 
    direction: 'rtl' 
  },
  aboutHero: { 
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', 
    color: '#fff', 
    textAlign: 'center', 
    padding: '100px 20px' 
  },
  heroTitle: { fontSize: '42px', marginBottom: '20px', fontWeight: 800 },
  heroDesc: { fontSize: '20px', opacity: 0.9, maxWidth: '800px', margin: 'auto', lineHeight: '1.6' },
  section: { padding: '80px 20px', maxWidth: '1200px', margin: 'auto' },
  sectionAlt: { 
    padding: '80px 20px', 
    background: '#ffffff', 
    borderTop: '1px solid #e2e8f0', 
    borderBottom: '1px solid #e2e8f0' 
  },
  sectionTitle: { textAlign: 'center', fontSize: '32px', marginBottom: '50px', color: '#1e3a8a', fontWeight: 700 },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '40px' 
  },
  card: { 
    background: '#fff', 
    padding: '40px', 
    borderRadius: '24px', 
    boxShadow: '0 20px 40px rgba(0,0,0,.05)', 
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  },
  iconText: { fontSize: '50px', marginBottom: '20px' },
  cardTitle: { fontSize: '24px', fontWeight: 700, marginBottom: '15px', color: '#1e3a8a' },
  cardText: { color: '#475569', lineHeight: '1.8', fontSize: '17px' },
  featuresList: { maxWidth: '800px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '25px' },
  featureItem: { display: 'flex', gap: '20px', alignItems: 'center', fontSize: '19px', color: '#334155' },
  checkIcon: { 
    background: '#fbbf24', 
    color: '#000', 
    width: '35px', 
    height: '35px', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontWeight: 'bold',
    flexShrink: 0
  },
  ctaCard: { 
    background: '#fbbf24', 
    padding: '60px 20px', 
    borderRadius: '30px', 
    textAlign: 'center', 
    color: '#000',
    boxShadow: '0 15px 35px rgba(251, 191, 36, 0.3)'
  },
  programBtn: { 
    display: 'inline-block', 
    marginTop: '20px', 
    padding: '16px 45px', 
    background: '#1e3a8a', 
    color: '#fff', 
    textDecoration: 'none', 
    borderRadius: '50px', 
    fontWeight: 700,
    fontSize: '18px'
  }
};

export default About;