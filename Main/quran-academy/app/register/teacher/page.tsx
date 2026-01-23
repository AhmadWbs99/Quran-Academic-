import React, { useState, useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface TeacherFormData {
  name: string;
  email: string;
  specialization: string;
  experience: string;
  program: string;
  availability: string;
  bio: string;
}

const TeacherRegistration: React.FC = () => {
  // 1. إدارة حالة النموذج (Form State)
  const [formData, setFormData] = useState<TeacherFormData>({
    name: '',
    email: '',
    specialization: 'قرآن وتجويد',
    experience: '',
    program: 'الحلقات الجماعية الكبرى',
    availability: '',
    bio: ''
  });

  // 2. ضبط اتجاه الصفحة عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "تسجيل المدرّسين | Quran Academy";
  }, []);

  // 3. معالج تغيير المدخلات
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // 4. معالج إرسال النموذج
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // محاكاة إرسال البيانات
    console.log("Teacher Data Submitted:", formData);
    
    alert("تم إرسال طلب التسجيل بنجاح، سيتم مراجعته من الإدارة.");
    
    // التوجيه لصفحة الانتظار (يمكن استبداله بـ useNavigate من react-router-dom)
    window.location.href = "teacher-pending.html";
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>أكاديمية القرآن</div>
      </header>

      {/* Main Content */}
      <div style={styles.container}>
        <h1 style={styles.title}>تسجيل بيانات المدرّس</h1>

        <div style={styles.formCard}>
          <form onSubmit={handleSubmit}>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>الاسم الكامل</label>
              <input 
                type="text" 
                id="name" 
                style={styles.input} 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البريد الإلكتروني</label>
              <input 
                type="email" 
                id="email" 
                style={styles.input} 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>التخصص</label>
              <select 
                id="specialization" 
                style={styles.select} 
                value={formData.specialization}
                onChange={handleChange}
              >
                <option value="قرآن وتجويد">قرآن وتجويد</option>
                <option value="تحفيظ القرآن">تحفيظ القرآن</option>
                <option value="قراءات">قراءات</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>سنوات الخبرة</label>
              <input 
                type="text" 
                id="experience" 
                style={styles.input} 
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البرنامج الذي تدرّسه</label>
              <select 
                id="program" 
                style={styles.select} 
                value={formData.program}
                onChange={handleChange}
              >
                <option value="الحلقات الجماعية الكبرى">الحلقات الجماعية الكبرى</option>
                <option value="الحلقات الجماعية الصغرى">الحلقات الجماعية الصغرى</option>
                <option value="الحلقات الفردية">الحلقات الفردية</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>أوقات التفرغ</label>
              <input 
                type="text" 
                id="availability" 
                placeholder="مثال: الأحد - الخميس 6م إلى 9م" 
                style={styles.input} 
                value={formData.availability}
                onChange={handleChange}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>نبذة مختصرة عنك</label>
              <textarea 
                id="bio" 
                style={styles.textarea} 
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" style={styles.submitBtn}>
              إرسال الطلب
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

// --- الستايلات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    color: '#1f2933',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#1f2933',
    color: '#fff',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  container: {
    maxWidth: '700px',
    margin: '50px auto',
    padding: '0 20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.1)',
  },
  inputGroup: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    boxSizing: 'border-box', // مهم جداً في React لضبط العرض
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    backgroundColor: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    minHeight: '80px',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
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

export default TeacherRegistration;