import React, { useState, useEffect } from 'react';

// --- التعريفات والأنواع (Types) ---
interface TeacherProfile {
  fullName: string;
  email: string;
  specialization: string;
  experience: string;
  bio: string;
  classesCount: string;
}

const TeacherProfileComponent: React.FC = () => {
  // 1. حالة بيانات الملف الشخصي
  const [profile, setProfile] = useState<TeacherProfile>({
    fullName: "الشيخ أحمد",
    email: "teacher@email.com",
    specialization: "قرآن وتجويد",
    experience: "8 سنوات",
    bio: "معلّم قرآن وتجويد بخبرة في التعليم عن بُعد.",
    classesCount: "3 حلقات"
  });

  // 2. إعدادات الصفحة عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "الملف الشخصي | المعلّم";
  }, []);

  // 3. معالج التغيير في المدخلات
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log("تم حفظ التغييرات:", profile);
    alert("تم حفظ التغييرات بنجاح!");
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>الملف الشخصي للمعلّم</h2>

          <div style={styles.group}>
            <label style={styles.label}>الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>التخصص</label>
            <input
              type="text"
              name="specialization"
              value={profile.specialization}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>سنوات الخبرة</label>
            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>نبذة مختصرة</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>عدد الحلقات</label>
            <input
              type="text"
              value={profile.classesCount}
              disabled
              style={{ ...styles.input, backgroundColor: '#f9fafb', cursor: 'not-allowed' }}
            />
          </div>

          <div style={styles.actions}>
            <button style={{ ...styles.btn, ...styles.saveBtn }} onClick={handleSave}>
              حفظ التغييرات
            </button>
            <button 
              style={styles.btn} 
              onClick={() => window.location.href = 'edit-teacher.html'}
            >
              تعديل البيانات
            </button>
            <button 
              style={{ ...styles.btn, ...styles.backBtn }} 
              onClick={() => window.history.back()}
            >
              رجوع
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
  },
  container: {
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
  },
  title: {
    margin: '0 0 20px 0',
    color: '#1f2933',
  },
  group: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    boxSizing: 'border-box',
    resize: 'vertical',
    minHeight: '90px',
    fontFamily: 'inherit',
  },
  actions: {
    marginTop: '25px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '10px 18px',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    backgroundColor: '#eee',
    color: '#1f2933',
    transition: 'opacity 0.2s',
  },
  saveBtn: {
    backgroundColor: '#fbbf24',
  },
  backBtn: {
    backgroundColor: '#e5e7eb',
  },
};

export default TeacherProfileComponent;