"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherRegister() {
  const router = useRouter();
  const [lang, setLang] = useState('ar');
  const [formData, setFormData] = useState({
    name: '', email: '', specialization: 'قرآن وتجويد', experience: '', program: 'الحلقات الجماعية الكبرى', availability: '', bio: ''
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "ar";
    setLang(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'ar' ? "تم إرسال طلبك للإدارة للمراجعة" : "Application sent for review");
    router.push('/login');
  };

  const t = {
    title: lang === 'ar' ? 'تقديم طلب انضمام كمعلم' : 'Apply as a Teacher',
    name: lang === 'ar' ? 'الاسم الكامل' : 'Full Name',
    email: lang === 'ar' ? 'البريد الإلكتروني' : 'Email',
    spec: lang === 'ar' ? 'التخصص' : 'Specialization',
    exp: lang === 'ar' ? 'سنوات الخبرة' : 'Experience',
    prog: lang === 'ar' ? 'البرنامج المفضل' : 'Preferred Program',
    time: lang === 'ar' ? 'أوقات التفرغ' : 'Availability',
    bio: lang === 'ar' ? 'نبذة مختصرة' : 'Short Bio',
    submit: lang === 'ar' ? 'إرسال الطلب' : 'Submit Application'
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>{t.title}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}><label style={styles.label}>{t.name}</label>
            <input type="text" style={styles.input} required onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div style={styles.inputGroup}><label style={styles.label}>{t.email}</label>
            <input type="email" style={styles.input} required onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div style={styles.grid}>
            <div style={styles.inputGroup}><label style={styles.label}>{t.spec}</label>
              <select style={styles.input} onChange={e => setFormData({...formData, specialization: e.target.value})}>
                <option>قرآن وتجويد</option><option>تحفيظ</option><option>قراءات</option>
              </select>
            </div>
            <div style={styles.inputGroup}><label style={styles.label}>{t.exp}</label>
              <input type="text" style={styles.input} placeholder="مثلاً: 5 سنوات" onChange={e => setFormData({...formData, experience: e.target.value})} />
            </div>
          </div>
          <div style={styles.inputGroup}><label style={styles.label}>{t.time}</label>
            <input type="text" style={styles.input} placeholder="مثال: الأحد - الخميس 6م" onChange={e => setFormData({...formData, availability: e.target.value})} />
          </div>
          <div style={styles.inputGroup}><label style={styles.label}>{t.bio}</label>
            <textarea style={{...styles.input, minHeight: '80px'}} onChange={e => setFormData({...formData, bio: e.target.value})} />
          </div>
          <button type="submit" style={styles.btn}>{t.submit}</button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pageWrapper: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '40px 20px' },
  card: { backgroundColor: '#fff', width: '100%', maxWidth: '600px', margin: '0 auto', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,.08)' },
  title: { fontSize: '24px', color: '#1e3a8a', marginBottom: '30px', fontWeight: 700, textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { fontSize: '14px', fontWeight: 700, color: '#475569' },
  input: { padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none', fontFamily: 'inherit' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  btn: { padding: '16px', backgroundColor: '#fbbf24', border: 'none', borderRadius: '40px', fontWeight: 700, cursor: 'pointer', fontSize: '16px', marginTop: '10px' }
};