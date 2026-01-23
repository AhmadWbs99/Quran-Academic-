import React, { useState, useEffect } from 'react';

// --- الواجهة البرمجية للبيانات (Interface) ---
interface StudentFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const StudentRegistration: React.FC = () => {
  // 1. إعداد حالة الحقول (State)
  const [formData, setFormData] = useState<StudentFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // 2. ضبط اتجاه الصفحة وعنوانها عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "تسجيل طالب جديد | الأكاديمية";
  }, []);

  // 3. معالج التغيير في المدخلات
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4. دالة التسجيل
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من تطابق كلمات المرور (مثال بسيط)
    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة!");
      return;
    }

    console.log("بيانات الطالب:", formData);
    
    // التوجيه إلى لوحة التحكم (Dashboard)
    window.location.href = "student-dashboard.html";
  };

  return (
    <div style={styles.body}>
      {/* تحميل خط Cairo */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
      `}</style>

      <div style={styles.container}>
        <h2 style={styles.h2}>تسجيل طالب جديد</h2>
        <p style={styles.p}>أنشئ حسابك للانضمام إلى الحلقات التعليمية</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="fullName"
            placeholder="الاسم الكامل"
            style={styles.input}
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            style={styles.input}
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            style={styles.input}
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="تأكيد كلمة المرور"
            style={styles.input}
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            إنشاء الحساب
          </button>
        </form>

        <div style={styles.loginLink}>
          لديك حساب بالفعل؟ <a href="login.html" style={styles.link}>تسجيل الدخول</a>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  body: {
    fontFamily: "'Cairo', sans-serif",
    backgroundColor: '#f1f5f9',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  container: {
    maxWidth: '420px',
    width: '100%',
    margin: '20px',
    backgroundColor: '#fff',
    padding: '35px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.08)',
    boxSizing: 'border-box',
  },
  h2: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#1e3a8a',
  },
  p: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    marginBottom: '25px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '12px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box', // يضمن عدم خروج الإدخال عن إطار الحاوية
    fontFamily: 'inherit',
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  loginLink: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
  },
  link: {
    color: '#1e3a8a',
    textDecoration: 'none',
    fontWeight: 600,
  },
};

export default StudentRegistration;