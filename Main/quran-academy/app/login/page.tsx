"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// --- التعريفات البرمجية (Types) ---
type Lang = 'en' | 'ar';
type Role = 'student' | 'teacher';

interface TranslationData {
  title: string;
  student: string;
  teacher: string;
  email: string;
  password: string;
  login: string;
  noAccount: string;
  register: string;
  logo: string;
  home: string;
}

const translations: Record<Lang, TranslationData> = {
  en: {
    title: "Login",
    student: "Student",
    teacher: "Teacher",
    email: "Email Address",
    password: "Password",
    login: "Login",
    noAccount: "Don’t have an account?",
    register: "Create one",
    logo: "Quran Academy",
    home: "Back to Home"
  },
  ar: {
    title: "تسجيل الدخول",
    student: "طالب",
    teacher: "معلّم",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    login: "دخول",
    noAccount: "ليس لديك حساب؟",
    register: "سجل الآن",
    logo: "أكاديمية القرآن",
    home: "العودة للرئيسية"
  }
};

const Login: React.FC = () => {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>('ar');
  const [role, setRole] = useState<Role>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. تحميل اللغة المحفوظة
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang) setLang(savedLang);
    setIsLoaded(true);
  }, []);

  // 2. تحديث اتجاه الصفحة
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang, isLoaded]);

  if (!isLoaded) return null;

  const t = translations[lang];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا مستقبلاً نضع التحقق من البيانات
    if (role === 'student') {
      router.push('/student/dashboard');
    } else {
      router.push('/teacher/dashboard');
    }
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        
        {/* Top Bar */}
        <div style={styles.topBar}>
          <Link href="/" style={styles.logoLink}>{t.logo}</Link>
          <button style={styles.langBtn} onClick={toggleLang}>
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>

        <h2 style={styles.h2}>{t.title}</h2>

        {/* Role Selection */}
        <div style={styles.rolesContainer}>
          <button
            style={{
              ...styles.roleBtn,
              ...(role === 'student' ? styles.activeRole : {}),
            }}
            onClick={() => setRole('student')}
          >
            {t.student}
          </button>
          <button
            style={{
              ...styles.roleBtn,
              ...(role === 'teacher' ? styles.activeRole : {}),
            }}
            onClick={() => setRole('teacher')}
          >
            {t.teacher}
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder={t.email}
            style={styles.input}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={t.password}
            style={styles.input}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={styles.loginBtn}>
            {t.login}
          </button>
        </form>

        {/* Register Link */}
        <div style={styles.registerLink}>
          <span>{t.noAccount} </span>
          <Link href="/register" style={styles.link}>
            {t.register}
          </Link>
        </div>

        <div style={{marginTop: '20px'}}>
           <Link href="/" style={styles.homeBtn}>{t.home}</Link>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (تم تحديثها لتناسب الهوية البصرية للأكاديمية) ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    fontFamily: 'Cairo, sans-serif',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,.08)',
    textAlign: 'center',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  logoLink: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#1e3a8a',
    textDecoration: 'none'
  },
  langBtn: {
    border: 'none',
    background: '#f1f5f9',
    padding: '6px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  h2: {
    marginBottom: '25px',
    color: '#1e3a8a',
    fontSize: '26px'
  },
  rolesContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '25px',
  },
  roleBtn: {
    flex: 1,
    padding: '12px',
    borderRadius: '30px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '15px'
  },
  activeRole: {
    backgroundColor: '#fbbf24',
    borderColor: '#fbbf24',
    fontWeight: 'bold',
    color: '#000'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    outline: 'none',
  },
  loginBtn: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '40px',
    backgroundColor: '#fbbf24',
    fontWeight: 'bold',
    fontSize: '17px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  registerLink: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#64748b'
  },
  link: {
    color: '#1e3a8a',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  homeBtn: {
    fontSize: '13px',
    color: '#94a3b8',
    textDecoration: 'none'
  }
};

export default Login;