import React, { useState, useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface StudentProfile {
  fullName: string;
  email: string;
  level: string;
  country: string;
}

const EditStudentProfile: React.FC = () => {
  // 1. حالة البيانات (تتم تعبئتها افتراضياً بالبيانات الحالية)
  const [profile, setProfile] = useState<StudentProfile>({
    fullName: "عبدالله محمد",
    email: "student@email.com",
    level: "متوسط",
    country: "السعودية",
  });

  // 2. إعدادات الاتجاه واللغة
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "تعديل بيانات الطالب";
  }, []);

  // 3. معالج تغيير المدخلات
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. دالة الحفظ
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("تم تحديث البيانات:", profile);
    alert("تم حفظ البيانات بنجاح");
    // التوجيه لصفحة الملف الشخصي
    window.location.href = "profile.html";
  };

  const goBack = () => {
    window.location.href = "profile.html";
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>تعديل البيانات</h2>

          <form onSubmit={handleSave}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>الاسم الكامل</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>المستوى</label>
              <input
                type="text"
                name="level"
                value={profile.level}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>الدولة</label>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.saveBtn}>
              حفظ التغييرات
            </button>
            <button 
              type="button" 
              onClick={goBack} 
              style={{ ...styles.saveBtn, ...styles.backBtn }}
            >
              رجوع
            </button>
          </form>
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
  },
  container: {
    maxWidth: '600px',
    width: '100%',
    margin: '50px auto',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.1)',
    boxSizing: 'border-box',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1f2933',
  },
  inputGroup: {
    marginBottom: '15px',
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
  saveBtn: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#16a34a',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.2s',
  },
  backBtn: {
    backgroundColor: '#9ca3af',
  },
};

export default EditStudentProfile;