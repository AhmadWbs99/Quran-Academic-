"use client";

"use client";
import React, { useState, useEffect } from 'react';

// --- تعريف أنواع البيانات ---
interface TeacherRegistration {
  name: string;
  email: string;
  specialization: string;
  experience: string;
  program: string;
  availability: string;
  bio: string;
}

const TeacherRegistrationPage: React.FC = () => {
  // 1. استخدام "المبدئ الأولي" (Lazy Initialization) للغة لتجنب أخطاء الهيدريشن
  const [lang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("lang") || "ar";
    }
    return "ar";
  });

  // 2. حالة بيانات النموذج
  const [formData, setFormData] = useState<TeacherRegistration>({
    name: '',
    email: '',
    specialization: 'قرآن وتجويد',
    experience: '',
    program: 'الحلقات الجماعية الكبرى',
    availability: '',
    bio: ''
  });

  // 3. ضبط اتجاه الصفحة واللغة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // 4. معالجة التغيير في الحقول
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // 5. إرسال النموذج
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // محاكاة حفظ البيانات (يمكنك هنا إرسالها إلى API)
    console.log("Teacher Data:", formData);
    
    alert("تم إرسال طلب التسجيل بنجاح، سيتم مراجعته من الإدارة.");
    
    // الانتقال لصفحة الانتظار
    window.location.href = "/teacher-pending";
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.logo}>أكاديمية القرآن</div>
      </header>

      <div style={styles.container}>
        <h1 style={styles.mainTitle}>تسجيل بيانات المدرّس</h1>

        <div style={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>الاسم الكامل</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البريد الإلكتروني</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>التخصص</label>
              <select id="specialization" value={formData.specialization} onChange={handleChange} style={styles.select}>
                <option>قرآن وتجويد</option>
                <option>تحفيظ القرآن</option>
                <option>قراءات</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>سنوات الخبرة</label>
              <input 
                type="text" 
                id="experience" 
                value={formData.experience} 
                onChange={handleChange} 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البرنامج الذي تدرّسه</label>
              <select id="program" value={formData.program} onChange={handleChange} style={styles.select}>
                <option>الحلقات الجماعية الكبرى</option>
                <option>الحلقات الجماعية الصغرى</option>
                <option>الحلقات الفردية</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>أوقات التفرغ</label>
              <input 
                type="text" 
                id="availability" 
                placeholder="مثال: الأحد - الخميس 6م إلى 9م" 
                value={formData.availability} 
                onChange={handleChange} 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>نبذة مختصرة عنك</label>
              <textarea 
                id="bio" 
                value={formData.bio} 
                onChange={handleChange} 
                style={styles.textarea} 
              />
            </div>

            <button type="submit" style={styles.submitBtn}>إرسال الطلب</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- الأنماط التنسيقية ---
const styles: Record<string, React.CSSProperties> = {
  pageContainer: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    color: '#1f2933',
  },
  header: {
    backgroundColor: '#1f2933',
    color: '#fff',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { fontSize: '22px', fontWeight: 'bold' },
  container: { maxWidth: '700px', margin: '50px auto', padding: '0 20px' },
  mainTitle: { textAlign: 'center', marginBottom: '30px' },
  formCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.1)',
  },
  inputGroup: { marginBottom: '18px' },
  label: { display: 'block', marginBottom: '6px', fontWeight: 'bold' },
  input: { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '15px', boxSizing: 'border-box' },
  select: { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '15px', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '15px', minHeight: '80px', resize: 'vertical', boxSizing: 'border-box' },
  submitBtn: {
    width: '100%',
    padding: '15px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#fbbf24',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default TeacherRegistrationPage;