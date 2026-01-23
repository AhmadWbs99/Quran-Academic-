import React, { useState, useEffect } from 'react';

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
}

const translations: Record<Lang, TranslationData> = {
  en: {
    title: "Login",
    student: "Student",
    teacher: "Teacher",
    email: "Email",
    password: "Password",
    login: "Login",
    noAccount: "Don’t have an account?",
    register: "Create one",
    logo: "Quran Academy"
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
    logo: "أكاديمية القرآن"
  }
};

const Login: React.FC = () => {
  // 1. الحالات (States)
  const [lang, setLang] = useState<Lang>('en');
  const [role, setRole] = useState<Role>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const t = translations[lang];

  // 2. تحديث اتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // 3. معالجة تسجيل الدخول
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'student') {
      window.location.href = "student/dashboard.html";
    } else {
      window.location.href = "teacher/dashboard.html";
    }
  };

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        
        {/* Top Bar */}
        <div style={styles.topBar}>
          <div style={styles.logo}>{t.logo}</div>
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
        <form onSubmit={handleLogin}>
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
          <a href="register.html" style={styles.link}>
            {t.register}
          </a>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  card: {
    backgroundColor: '#fff',
    width: '380px',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,.1)',
    boxSizing: 'border-box',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#1f2933',
  },
  langBtn: {
    border: 'none',
    background: '#eee',
    padding: '5px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  h2: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1f2933',
  },
  rolesContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  roleBtn: {
    flex: 1,
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeRole: {
    backgroundColor: '#fbbf24',
    borderColor: '#fbbf24',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '15px',
  },
  loginBtn: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#fbbf24',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
  registerLink: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '14px',
  },
  link: {
    color: '#f59e0b',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;