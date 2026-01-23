import React, { useState, useEffect } from 'react';

// --- التعريفات والأنواع (Types) ---
type Lang = 'ar' | 'en';

interface Translation {
  logo: string;
  logout: string;
  m1: string;
  m2: string;
  m3: string;
  m4: string;
  m5: string;
  welcome: string;
  desc: string;
  c1: string;
  c2: string;
  c3: string;
}

const translations: Record<Lang, Translation> = {
  ar: {
    logo: "أكاديمية القرآن | لوحة المعلم",
    logout: "تسجيل الخروج",
    m1: "الرئيسية",
    m2: "حلقاتي",
    m3: "الطلاب",
    m4: "الجدول",
    m5: "الملف الشخصي",
    welcome: "مرحبًا بك",
    desc: "هذه لوحة التحكم الخاصة بك كمعلم.",
    c1: "عدد الحلقات",
    c2: "عدد الطلاب",
    c3: "حصص هذا الأسبوع"
  },
  en: {
    logo: "Quran Academy | Teacher Dashboard",
    logout: "Logout",
    m1: "Home",
    m2: "My Classes",
    m3: "Students",
    m4: "Schedule",
    m5: "Profile",
    welcome: "Welcome",
    desc: "This is your teacher dashboard.",
    c1: "Classes",
    c2: "Students",
    c3: "This Week Sessions"
  }
};

const TeacherDashboard: React.FC = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const t = translations[lang];

  // مزامنة اتجاه الصفحة واللغة عند تغيير الحالة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'ar' ? 'en' : 'ar'));

  const handleLogout = () => {
    // التوجيه لصفحة تسجيل الدخول
    window.location.href = "../login.html";
  };

  return (
    <div style={styles.body}>
      {/* Header Area */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <div style={styles.headerActions}>
          <button style={styles.langBtn} onClick={toggleLang}>
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            {t.logout}
          </button>
        </div>
      </header>

      <div style={styles.container}>
        {/* Sidebar Navigation */}
        <aside style={styles.sidebar}>
          <nav>
            <a href="home.html" style={styles.sidebarLink}>{t.m1}</a>
            <a href="classes.html" style={styles.sidebarLink}>{t.m2}</a>
            <a href="students.html" style={styles.sidebarLink}>{t.m3}</a>
            <a href="schedule.html" style={styles.sidebarLink}>{t.m4}</a>
            <a href="teacher-info.html" style={styles.sidebarLink}>{t.m5}</a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main style={styles.main}>
          <h2 style={styles.h2}>{t.welcome}</h2>
          <p style={styles.desc}>{t.desc}</p>

          <div style={styles.cardsGrid}>
            <div style={styles.card}>
              <h4 style={styles.cardTitle}>{t.c1}</h4>
              <p style={styles.cardValue}>3</p>
            </div>
            <div style={styles.card}>
              <h4 style={styles.cardTitle}>{t.c2}</h4>
              <p style={styles.cardValue}>18</p>
            </div>
            <div style={styles.card}>
              <h4 style={styles.cardTitle}>{t.c3}</h4>
              <p style={styles.cardValue}>12</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- الأنماط التنسيقية (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    color: '#1f2933',
    minHeight: '100vh',
  },
  header: {
    background: '#1f2933',
    color: '#fff',
    padding: '15px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    boxSizing: 'border-box'
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  headerActions: {
    display: 'flex',
    gap: '10px'
  },
  langBtn: {
    border: 'none',
    padding: '8px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    background: '#eee'
  },
  logoutBtn: {
    border: 'none',
    padding: '8px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    background: '#fbbf24'
  },
  container: {
    display: 'flex',
    minHeight: 'calc(100vh - 60px)'
  },
  sidebar: {
    width: '240px',
    background: '#fff',
    padding: '20px',
    boxShadow: '2px 0 10px rgba(0,0,0,.05)',
    boxSizing: 'border-box'
  },
  sidebarLink: {
    display: 'block',
    padding: '12px',
    marginBottom: '10px',
    borderBottom: '1px solid #f9fafb',
    borderRadius: '10px',
    textDecoration: 'none',
    color: '#1f2933',
    fontWeight: 'bold',
    transition: 'background 0.3s ease'
  },
  main: {
    flex: 1,
    padding: '30px'
  },
  h2: {
    marginTop: 0,
    color: '#1f2933'
  },
  desc: {
    color: '#6b7280',
    marginBottom: '30px'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px'
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
    textAlign: 'center'
  },
  cardTitle: {
    margin: '0 0 10px 0',
    color: '#1e3a8a',
    fontSize: '16px'
  },
  cardValue: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2933'
  }
};

export default TeacherDashboard;