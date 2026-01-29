"use client"; // ضروري جداً لحل مشكلة السيرفر كمبوننت

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Lang = 'ar' | 'en';

const translations = {
  ar: {
    logo: "أكاديمية القرآن | لوحة الطالب",
    logout: "تسجيل الخروج",
    menu: ["الرئيسية", "حلقاتي", "الجدول", "التقارير", "الملف الشخصي"],
    welcome: "مرحبًا بك، يا بطل!",
    desc: "هذه لوحة التحكم الخاصة بك، تتبع إنجازك في حفظ القرآن.",
    stats: ["الحلقات المسجلة", "المعلم الحالي", "حصص هذا الأسبوع"]
  },
  en: {
    logo: "Quran Academy | Dashboard",
    logout: "Logout",
    menu: ["Home", "My Classes", "Schedule", "Reports", "Profile"],
    welcome: "Welcome back, Hero!",
    desc: "This is your dashboard, track your Quran memorization progress.",
    stats: ["Enrolled Classes", "Current Teacher", "Sessions This Week"]
  }
};

export default function StudentDashboard() {
  const [lang, setLang] = useState<Lang>('ar');
  const router = useRouter();
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleLogout = () => {
    // هنا نقوم بمسح أي بيانات جلسة مستقبلاً
    router.push("/login");
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <div style={styles.headerActions}>
          <button style={styles.langBtn} onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            {t.logout}
          </button>
        </div>
      </header>

      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <nav style={styles.navStack}>
            {t.menu.map((item, index) => (
              <Link key={index} href={`/studentdash/${item.toLowerCase().replace(" ", "")}`} style={styles.sidebarLink}>
                {item}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          <div style={styles.heroSection}>
            <h2 style={styles.welcomeTitle}>{t.welcome}</h2>
            <p style={styles.welcomeDesc}>{t.desc}</p>
          </div>

          <div style={styles.cardsGrid}>
            <div style={styles.card}>
              <span style={styles.icon}>📖</span>
              <h4 style={styles.cardHeader}>{t.stats[0]}</h4>
              <p style={styles.cardValue}>2</p>
            </div>
            <div style={styles.card}>
              <span style={styles.icon}>👳</span>
              <h4 style={styles.cardHeader}>{t.stats[1]}</h4>
              <p style={styles.cardValue}>الشيخ أحمد</p>
            </div>
            <div style={styles.card}>
              <span style={styles.icon}>📅</span>
              <h4 style={styles.cardHeader}>{t.stats[2]}</h4>
              <p style={styles.cardValue}>6</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: { margin: 0, fontFamily: 'Cairo, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { background: '#1e3a8a', color: '#fff', padding: '0 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  logo: { fontSize: '20px', fontWeight: 'bold' },
  headerActions: { display: 'flex', gap: '15px' },
  langBtn: { border: '1px solid #fff', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', background: 'transparent', color: '#fff' },
  logoutBtn: { border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', background: '#fbbf24', color: '#1e3a8a' },
  container: { display: 'flex', minHeight: 'calc(100vh - 70px)' },
  sidebar: { width: '260px', background: '#fff', padding: '30px 15px', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' },
  navStack: { display: 'flex', flexDirection: 'column', gap: '8px' },
  sidebarLink: { padding: '12px 20px', borderRadius: '12px', textDecoration: 'none', color: '#475569', fontWeight: 600, transition: '0.2s', fontSize: '15px' },
  main: { flex: 1, padding: '40px' },
  heroSection: { marginBottom: '40px' },
  welcomeTitle: { fontSize: '28px', color: '#1e3a8a', marginBottom: '10px' },
  welcomeDesc: { color: '#64748b', fontSize: '16px' },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' },
  card: { background: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #f1f5f9' },
  icon: { fontSize: '40px', display: 'block', marginBottom: '15px' },
  cardHeader: { margin: '0 0 10px 0', color: '#64748b', fontSize: '14px', textTransform: 'uppercase' },
  cardValue: { margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#1e3a8a' },
};