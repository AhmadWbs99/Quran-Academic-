"use client";

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function StudentRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "ar";
    setLang(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("كلمات المرور غير متطابقة");
    alert("تم إنشاء حساب الطالب بنجاح!");
    router.push('/login');
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>{lang === 'ar' ? 'تسجيل طالب جديد' : 'Student Registration'}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'} style={styles.input} required onChange={e => setFormData({...formData, fullName: e.target.value})} />
          <input type="email" placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} style={styles.input} required onChange={e => setFormData({...formData, email: e.target.value})} />
          <input type="password" placeholder={lang === 'ar' ? 'كلمة المرور' : 'Password'} style={styles.input} required onChange={e => setFormData({...formData, password: e.target.value})} />
          <input type="password" placeholder={lang === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'} style={styles.input} required onChange={e => setFormData({...formData, confirmPassword: e.target.value})} />
          <button type="submit" style={styles.btn}>{lang === 'ar' ? 'إنشاء حساب' : 'Create Account'}</button>
        </form>
        <Link href="/register" style={styles.backLink}>{lang === 'ar' ? 'رجوع' : 'Back'}</Link>
      </div>
    </div>
  );
}

// نفس الستايلات السابقة مع تعديلات طفيفة
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#f1f5f9', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
  card: { backgroundColor: '#fff', width: '100%', maxWidth: '420px', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,.08)', textAlign: 'center' },
  title: { fontSize: '24px', color: '#1e3a8a', marginBottom: '25px', fontWeight: 700 },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none' },
  btn: { padding: '15px', backgroundColor: '#fbbf24', border: 'none', borderRadius: '40px', fontWeight: 700, cursor: 'pointer', fontSize: '16px' },
  backLink: { display: 'block', marginTop: '20px', color: '#64748b', textDecoration: 'none' }
};