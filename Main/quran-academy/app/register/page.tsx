"use client";

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Lang = 'ar' | 'en';

const translations = {
  ar: {
    logo: "أكاديمية القرآن",
    title: "إنشاء حساب جديد",
    subtitle: "اختر نوع الحساب للمتابعة",
    student: "طالب",
    teacher: "معلّم",
    continueBtn: "متابعة التسجيل",
    backLogin: "لديك حساب بالفعل؟ سجل دخولك"
  },
  en: {
    logo: "Quran Academy",
    title: "Create New Account",
    subtitle: "Choose account type to continue",
    student: "Student",
    teacher: "Teacher",
    continueBtn: "Continue Registration",
    backLogin: "Already have an account? Login"
  }
};

export default function RegistrationType() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>('ar');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang) setLang(savedLang);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang, isLoaded]);

  if (!isLoaded) return null;
  const t = translations[lang];

  const handleNext = () => {
    router.push(role === 'teacher' ? '/register/teacher' : '/register/student');
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <div style={styles.logo}>{t.logo}</div>
        <h2 style={styles.title}>{t.title}</h2>
        <p style={styles.subtitle}>{t.subtitle}</p>

        <div style={styles.grid}>
          <div 
            onClick={() => setRole('student')}
            style={{...styles.roleCard, ...(role === 'student' ? styles.activeCard : {})}}
          >
            <div style={styles.icon}>🎓</div>
            <span>{t.student}</span>
          </div>
          <div 
            onClick={() => setRole('teacher')}
            style={{...styles.roleCard, ...(role === 'teacher' ? styles.activeCard : {})}}
          >
            <div style={styles.icon}>👨‍🏫</div>
            <span>{t.teacher}</span>
          </div>
        </div>

        <button style={styles.btn} onClick={handleNext}>{t.continueBtn}</button>
        
        <Link href="/login" style={styles.backLink}>{t.backLogin}</Link>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pageWrapper: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#f1f5f9', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
  card: { backgroundColor: '#fff', width: '100%', maxWidth: '450px', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,.08)', textAlign: 'center' },
  logo: { fontSize: '22px', fontWeight: 700, color: '#1e3a8a', marginBottom: '20px' },
  title: { fontSize: '24px', color: '#0f172a', marginBottom: '8px' },
  subtitle: { color: '#64748b', marginBottom: '30px', fontSize: '15px' },
  grid: { display: 'flex', gap: '15px', marginBottom: '30px' },
  roleCard: { flex: 1, padding: '25px', borderRadius: '16px', border: '2px solid #e2e8f0', cursor: 'pointer', transition: '0.3s', fontWeight: 700 },
  activeCard: { borderColor: '#fbbf24', backgroundColor: '#fffbeb', color: '#92400e' },
  icon: { fontSize: '30px', marginBottom: '10px' },
  btn: { width: '100%', padding: '15px', backgroundColor: '#1e3a8a', color: '#fff', border: 'none', borderRadius: '40px', fontWeight: 700, cursor: 'pointer', fontSize: '16px' },
  backLink: { display: 'block', marginTop: '20px', color: '#64748b', textDecoration: 'none', fontSize: '14px' }
};