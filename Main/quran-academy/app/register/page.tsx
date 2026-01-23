import React, { useState, useEffect } from 'react';

// --- أنواع البيانات (Types) ---
type Lang = 'ar' | 'en';

interface Translation {
  logo: string;
  navHome: string;
  navPrograms: string;
  navContact: string;
  pageTitle: string;
  mainTitle: string;
  subtitle: string;
  student: string;
  teacher: string;
  continueBtn: string;
}

const translations: Record<Lang, Translation> = {
  ar: {
    logo: "أكاديمية القرآن",
    navHome: "الرئيسية",
    navPrograms: "البرامج",
    navContact: "تواصل",
    pageTitle: "إنشاء حساب",
    mainTitle: "إنشاء حساب",
    subtitle: "اختر نوع الحساب للمتابعة",
    student: "طالب",
    teacher: "معلّم",
    continueBtn: "متابعة التسجيل"
  },
  en: {
    logo: "Quran Academy",
    navHome: "Home",
    navPrograms: "Programs",
    navContact: "Contact",
    pageTitle: "Create Account",
    mainTitle: "Create Account",
    subtitle: "Choose account type to continue",
    student: "Student",
    teacher: "Teacher",
    continueBtn: "Continue Registration"
  }
};

const RegistrationType: React.FC = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const t = translations[lang];

  // مزامنة اتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.pageTitle;
  }, [lang, t.pageTitle]);

  const toggleLang = () => setLang(prev => (prev === 'ar' ? 'en' : 'ar'));

  const handleRegister = () => {
    if (role === 'teacher') {
      window.location.href = "/teacher-register";
    } else {
      window.location.href = "/student-register";
    }
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
        <nav style={styles.nav}>
          <a href="/home" style={styles.navLink}>{t.navHome}</a>
          <a href="/home#programs" style={styles.navLink}>{t.navPrograms}</a>
          <a href="/home#contact" style={styles.navLink}>{t.navContact}</a>
        </nav>
        <button style={styles.langBtn} onClick={toggleLang}>
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>
      </header>

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.registerBox}>
          <h2 style={styles.title}>{t.mainTitle}</h2>
          <p style={styles.subtitle}>{t.subtitle}</p>

          <div style={styles.userTypeGrid}>
            <label style={{
              ...styles.roleLabel,
              ...(role === 'student' ? styles.activeRole : {})
            }}>
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
                style={styles.radioInput}
              />
              <span>{t.student}</span>
            </label>

            <label style={{
              ...styles.roleLabel,
              ...(role === 'teacher' ? styles.activeRole : {})
            }}>
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === 'teacher'}
                onChange={() => setRole('teacher')}
                style={styles.radioInput}
              />
              <span>{t.teacher}</span>
            </label>
          </div>

          <button style={styles.btn} onClick={handleRegister}>
            {t.continueBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  body: {
    fontFamily: 'Cairo, sans-serif',
    background: '#f8fafc',
    minHeight: '100vh',
    margin: 0,
  },
  header: {
    background: '#ffffff',
    padding: '20px 40px',
    boxShadow: '0 10px 25px rgba(0,0,0,.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    background: '#fbbf24',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  container: {
    padding: '80px 20px',
  },
  registerBox: {
    maxWidth: '420px',
    margin: '0 auto',
    background: '#fff',
    padding: '35px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.08)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    margin: '0 0 8px 0',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '25px',
  },
  userTypeGrid: {
    display: 'flex',
    gap: '15px',
    marginBottom: '25px',
  },
  roleLabel: {
    flex: 1,
    padding: '12px',
    border: '2px solid #e5e7eb',
    borderRadius: '14px',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: 600,
    transition: '0.3s',
  },
  activeRole: {
    borderColor: '#fbbf24',
    background: '#fef3c7',
    color: '#000',
  },
  radioInput: {
    display: 'none',
  },
  btn: {
    width: '100%',
    padding: '14px',
    background: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s',
  }
};

export default RegistrationType;