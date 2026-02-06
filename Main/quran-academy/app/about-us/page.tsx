import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC<{ t: any }> = ({ t }) => {
  return (
    <div style={styles.wrapper}>
      {/* Hero Section */}
      <section style={styles.aboutHero}>
        <h1 style={styles.heroTitle}>{t.aboutTitle || "عن الأكاديمية"}</h1>
        <p style={styles.heroDesc}>
          {t.aboutSubTitle || "نسعى لتكون رحلتك مع القرآن الكريم ميسرة وممتعة بأحدث التقنيات."}
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>🎯</div>
            <h3 style={styles.cardTitle}>{t.missionTitle || "رسالتنا"}</h3>
            <p style={styles.cardText}>
              {t.missionDesc || "توفير بيئة تعليمية قرآنية متميزة تجمع بين أصالة التلقي ومرونة التكنولوجيا المعاصرة."}
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.icon}>👁️</div>
            <h3 style={styles.cardTitle}>{t.visionTitle || "رؤيتنا"}</h3>
            <p style={styles.cardText}>
              {t.visionDesc || "أن نصبح المنصة العالمية الأولى في تعليم القرآن الكريم والقراءات عبر الإنترنت."}
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>{t.whyUsTitle || "لماذا تختار أكاديميتنا؟"}</h2>
        <div style={styles.featuresList}>
          <div style={styles.featureItem}>
            <span style={styles.check}>✓</span>
            <div>
              <strong>معلمون مجازون:</strong> جميع معلمينا يحملون إجازات متصلة السند.
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.check}>✓</span>
            <div>
              <strong>تقنيات متقدمة:</strong> نستخدم Zoom Video SDK لضمان تفاعل حقيقي وصوت نقي.
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.check}>✓</span>
            <div>
              <strong>مرونة تامة:</strong> جداول دراسية تناسب وقتك مهما كان مكانك في العالم.
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.section}>
        <div style={styles.ctaCard}>
          <h2>{t.startJourney || "ابدأ رحلتك القرآنية اليوم"}</h2>
          <Link href="/Classes/groupclasses" style={styles.programBtn}>
            {t.joinNow || "انضم إلينا الآن"}
          </Link>
        </div>
      </section>
    </div>
  );
};

// التنسيقات (Styles) بنفس أسلوبك السابق
const styles: Record<string, React.CSSProperties> = {
  wrapper: { fontFamily: 'Cairo, sans-serif', background: '#f8fafc', minHeight: '100vh', direction: 'rtl' },
  aboutHero: { background: '#1e3a8a', color: '#fff', textAlign: 'center', padding: '80px 20px' },
  heroTitle: { fontSize: '36px', marginBottom: '15px', fontWeight: 700 },
  heroDesc: { fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: 'auto' },
  section: { padding: '60px 20px', maxWidth: '1100px', margin: 'auto' },
  sectionAlt: { padding: '60px 20px', background: '#fff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' },
  sectionTitle: { textAlign: 'center', fontSize: '28px', marginBottom: '40px', color: '#1e3a8a' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  card: { background: '#fff', padding: '40px', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,.05)', textAlign: 'center' },
  icon: { fontSize: '40px', marginBottom: '20px' },
  cardTitle: { fontSize: '22px', fontWeight: 700, marginBottom: '15px', color: '#1e3a8a' },
  cardText: { color: '#64748b', lineHeight: '1.7' },
  featuresList: { maxWidth: '700px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' },
  featureItem: { display: 'flex', gap: '15px', fontSize: '18px', alignItems: 'flex-start' },
  check: { color: '#fbbf24', fontWeight: 'bold', fontSize: '20px' },
  ctaCard: { background: '#fbbf24', padding: '50px', borderRadius: '24px', textAlign: 'center', color: '#000' },
  programBtn: { display: 'inline-block', marginTop: '25px', padding: '15px 40px', background: '#1e3a8a', color: '#fff', textDecoration: 'none', borderRadius: '30px', fontWeight: 600 }
};

export default About;